//App
  //Search
 //Trending component
      // Trending Lists
         // Trending Card
 //Lists component 
    // cardlists
        // card
 // Sidebar
 //Bookmarked Component
 // cardInfo 
 // bookMarkIcon

import Search from "./components/Search/Search"
import Sidebar from "./components/Sidebar/Sidebar"
import Main from "./components/Main"
import TrendingLists from "./components/Trending/TrendingLists"
import Trending from "./components/Trending/Trending"
import Lists from "./components/Card/Lists"
import CardLists from "./components/Card/CardLists"
import { useEffect,useState } from "react"
import SkeltonRecommended from "./components/Skeleton/SkeletonRecommended"
import SkeltonTrending from "./components/Skeleton/SkeletonTrending"
import Error from "./components/Error/Error"
import { useNetwork } from "./Utils/useNetwork"

const URL = 'https://api.jikan.moe/v4'
//return () => controller.abort()
//const controller = new AbortController
//{signal : controller.signal}

function App() {

  const [topAnime, setTopAnime] = useState([])
  const [recommendedAnime, setRecommendedAnime] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')
  const isOnline = useNetwork()

    useEffect(() => {
      setIsLoading(true)
      setError('')
      async function FetchTopAnime() {
        try{
          const res = await fetch(`${URL}/top/anime`);
          if(res.status === 404) throw new (Error as any)("Anime Not found")
          const {data} = await res.json()
          setTopAnime(data)
         }catch(err : any){
            setError(err.message)
         }
      }
      FetchTopAnime()
    }, [])


   useEffect(() => {
    setError('')
     async function FetchRecommendedAnime() {
        const id = setTimeout(async() => {
         try{
          const res = await fetch(`${URL}/anime?page=1`);
          if(res.status === 404) throw new (Error as any)("Anime Not found")
          const { data } = await res.json();
          setRecommendedAnime(data);
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

   useEffect(() => {
      if(!isOnline) setError("Connection Lost")
      else setError('')
   }, [isOnline])


  return (
    <div className="md:m-6 lg:m-8">
      <Sidebar/>
      <Main>
       <Search/>
       {error && <Error error={error}/>}
       {isLoading && !error && <SkeltonTrending/>}
       {isLoading && !error && <SkeltonRecommended/>}

       {!isLoading && !error &&
          <Trending>
            <TrendingLists topAnime={topAnime}/>
          </Trending>
        }
       {!isLoading && !error && 
          <Lists>
            <CardLists recommendedAnime={recommendedAnime}/>
          </Lists> 
        }

      </Main>
    </div>
  )
}


export default App
