import { animeType } from '../../../Types'
import Bookmarked from '../Bookmarked/Bookmarked'
import TrendingCard from './TrendingCard'


type Props = {
    topAnime : animeType[],
    handleSelectedAnime : (anime : animeType) => void,
}

const TrendingLists = ({topAnime, handleSelectedAnime}: Props) => {
    // to do later pass trending card data as props.
  return (
    <ul  className='mt-5 mb-3 flex items-center gap-4 overflow-x-scroll'>
        {
          topAnime.map(anime => <TrendingCard anime ={anime} key={anime.mal_id} >
            <Bookmarked anime={anime} handleSelectedAnime={handleSelectedAnime}/>
          </TrendingCard>
        )}
    </ul>
  )
}

export default TrendingLists