import { animeType } from '../../../Types'
import Bookmarked from '../Bookmarked/Bookmarked'
import TrendingCard from './TrendingCard'


type Props = {
    topAnime : animeType[],
    handleSelectedAnime : (anime : animeType) => void,
    onAnimeClick : (value : boolean, anime :animeType) => void
}

const TrendingLists = ({topAnime, handleSelectedAnime, onAnimeClick}: Props) => {
    // to do later pass trending card data as props.
  return (
    <ul  className='mt-5 mb-3 flex items-center gap-4 overflow-x-scroll'>
        {
          topAnime.map(anime => <TrendingCard onAnimeClick={onAnimeClick} anime ={anime} key={anime.mal_id} >
            <Bookmarked anime={anime} handleSelectedAnime={handleSelectedAnime}/>
          </TrendingCard>
        )}
    </ul>
  )
}

export default TrendingLists