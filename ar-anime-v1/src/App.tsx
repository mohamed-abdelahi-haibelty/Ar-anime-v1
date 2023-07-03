import Search from "./components/Search/Search"
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main"
import TrendingLists from "./components/Trending/TrendingLists"
import Trending from "./components/Trending/Trending"
import Lists from "./components/Card/Lists"
import CardLists from "./components/Card/CardLists"
import { useEffect,useRef,useState } from "react"
import SkeltonRecommended from "./components/Skeleton/SkeletonRecommended"
import SkeltonTrending from "./components/Skeleton/SkeletonTrending"
import Error from "./components/Error/Error"
import { useNetwork } from "./Utils/useNetwork"
import { animeType } from "../Types"

const URL = 'https://api.jikan.moe/v4'

function App() {

  const [topAnime, setTopAnime] = useState<animeType[]>([])
  const [recommendedAnime, setRecommendedAnime] = useState<animeType[] >([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const [querry, setQuerry] = useState('')
  const [favAnime, setFaveAnime] = useState<animeType[]>([])
  const [filter, setFilter] = useState('')
  const [route, setRoute] = useState('home')
  const [filteredList, setFilteredList] = useState(favAnime)
  const isOnline = useNetwork()
  const cachedAnime = useRef<animeType[]>([])


  function handleSearch(value : string){
    if(!value) setRecommendedAnime(cachedAnime.current)
    setQuerry(value)
  }

  function handleFilter(value : string){
    setFilter(value)
  }

  function handleRoute(route : string){
    setRoute(route)
  }

  function handleSelectedAnime(anime : animeType){
    anime.isFav ? removeFavAnime(anime) : addFavAnime(anime)
  }

  function addFavAnime(anime : animeType){
    const updatedAnime = {...anime, isFav : true}
    syncDataWithUI(anime, updatedAnime)
    setFaveAnime((prevAnime) => [...prevAnime, updatedAnime])
  }

  function syncDataWithUI(anime : animeType, updatedAnime : animeType){
    setRecommendedAnime(prv => prv.map(a => a.mal_id === anime.mal_id ? updatedAnime : a))
    setTopAnime(prv => prv.map(a => a.mal_id === anime.mal_id ? updatedAnime : a))
    cachedAnime.current = cachedAnime.current.map(a => a.mal_id === anime.mal_id ? updatedAnime : a)
  }

  function removeFavAnime(anime : animeType){
      const updatedAnime = {...anime, isFav : false}
      syncDataWithUI(anime, updatedAnime)
      setFaveAnime((prevAnime) => prevAnime.filter((a) =>  a.mal_id !== anime.mal_id))
  }

  // change page title
  useEffect(() => {
    document.title = route[0].toUpperCase() + route.slice(1)
  }, [route])

  // search for an anime in the bookmark
  useEffect(() => {
    setFilteredList(favAnime.filter(anime => anime.title.toLowerCase().includes(filter.toLowerCase())))
  }, [filter, favAnime])

  // FETCH TOP ANIME
    useEffect(() => {
      setIsLoading(true)
      setError('')
      async function FetchTopAnime() {
        try{
          const res = await fetch(`${URL}/top/anime`);
          if(res.status === 404) throw new (Error as any)("Anime Not found")
          const {data} = await res.json()
          const updatedData = data.map((d : animeType) => ({...d, isFav:false}))
          setTopAnime(updatedData)
         }catch(err : any){
            setError(err.message)
         }
      }
      FetchTopAnime()
    }, [])

   // FETCH RECOMMENDED ANIME
   useEffect(() => {
    setError('')
     async function FetchRecommendedAnime() {
        const id = setTimeout(async() => {
         try{
          const res = await fetch(`${URL}/anime?page=1`);
          if(res.status === 404) throw new (Error as any)("Anime Not found")
          const { data } = await res.json();
          const updatedData = data.map((d : animeType) => ({...d, isFav:false}))
          setRecommendedAnime(updatedData);
          cachedAnime.current = updatedData
          setIsLoading(false)
         }catch(err : any){
            setError(err.message)
         }
         stopTimeOut()
       }, 2000)
       const stopTimeOut = () => clearTimeout(id)
     }
     FetchRecommendedAnime();
   }, [])

   // HANDLE CONNECTION LOST ERROR
   useEffect(() => {
      if(!isOnline) setError("Connection Lost")
      else setError('')
   }, [isOnline])

  
   // HANDLE ANIME SEARCH
   useEffect(() => {
      let id = 0
      async function getAnime() {
        setError('')
        setIsLoading(true)
        try{
          const res = await fetch(`${URL}/anime?q=${querry}&swf`)
          const {data} = await res.json()
          const updatedData = data.map((d : animeType) => ({...d, isFav:false}))
          if (updatedData.length === 0) setError("Anime Not Found")
          setRecommendedAnime(updatedData)
          setIsLoading(false)
        }catch(err : any){
          setError(err.message)
        }
      }
      if(querry.length > 3){
        id = setTimeout(() => {
          getAnime()
        }, 300)
      }

      return () => clearTimeout(id)
   }, [querry])
   


  return (
    <div className="md:m-6 lg:m-8">
      <Sidebar onRoute={handleRoute}/>
      <Main>
       {route === 'home' &&
        <>
          <Search placeholder="Search for Anime" querry={querry} handleSearch={handleSearch}/>
          {error && <Error error={error}/>}
          {isLoading && !error && querry.length < 3 && <SkeltonTrending/>}
          {isLoading && !error && <SkeltonRecommended/>}

          {!isLoading && !error && querry.length < 3 &&
              <Trending>
                <TrendingLists handleSelectedAnime={handleSelectedAnime} topAnime={topAnime}/>
              </Trending>
          }
          {!isLoading && !error && 
              <Lists querry={querry}>
                <CardLists handleSelectedAnime={handleSelectedAnime} recommendedAnime={recommendedAnime}/>
              </Lists> 
          }
        </>
       }

       {route === 'bookmark' && 
          <>
            <Search handleSearch={handleFilter} querry={filter} placeholder="Bookmarked Anime"/>
            <Lists querry={querry} text="Bookmarked Anime">
                <CardLists handleSelectedAnime={handleSelectedAnime} recommendedAnime={filteredList}/>
            </Lists> 
          </>
       }

      </Main>
    </div>
  )
}


export default App
