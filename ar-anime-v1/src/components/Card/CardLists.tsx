// import trendingImg from '../../assets/b.webp'
// import atackImg from '../../assets/100633.jpg'
// import cuteImg from '../../assets/cute.jpg'
// import gintamaImg from '../../assets/gintama.webp'
// import stinsImg from '../../assets/stins.webp'
import { animeType } from '../../../Types'
import Bookmarked from '../Bookmarked/Bookmarked'
import Card from './Card'

// const imgs = [trendingImg, atackImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg]

type Props = {
    recommendedAnime : animeType[],
    handleSelectedAnime : (anime : animeType) => void,
    onAnimeClick : (value : boolean, anime : animeType) => void
}

const CardLists = ({recommendedAnime, handleSelectedAnime, onAnimeClick}: Props) => {
    // to do later pass trending card data as props.
  return (
    <ul  className='mt-5 mb-3 flex items-center gap-4 md:gap-[30px] lg:gap-10 flex-wrap'>
        {recommendedAnime?.map(anime => {
           return <Card
           onAnimeClick={onAnimeClick}
           anime ={anime}
           key={anime.mal_id} 
           >
            <Bookmarked handleSelectedAnime={handleSelectedAnime} anime={anime}/>
           </Card>
        })}
    </ul>
  )
}

export default CardLists