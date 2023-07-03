import {BsBookmark} from 'react-icons/bs'
import {BsBookmarkFill} from 'react-icons/bs'
import { animeType } from '../../../Types'

type Props = {
  handleSelectedAnime : (anime : animeType) => void,
  anime : animeType
}

const Bookmarked = ({handleSelectedAnime, anime}: Props) => {
  function handleBookmark() {
    handleSelectedAnime(anime)
  }
  return (
    <div onClick={handleBookmark}  className={`absolute top-2 right-2 flex justify-center items-center w-8 h-8 rounded-full bg-black/60 group ${!anime.isFav && 'hover:bg-white'}  cursor-pointer`}>
        {
          !anime.isFav ? <BsBookmark  className="text-white w-4 h-4 group-hover:text-black"/>
          :
          <BsBookmarkFill className="text-white w-4 h-4"/>
        }
    </div>
  )
}

export default Bookmarked