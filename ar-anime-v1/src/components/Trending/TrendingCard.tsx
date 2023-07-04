import {AiFillStar} from 'react-icons/ai'
import {PiTelevisionBold} from 'react-icons/pi'
import { animeType } from '../../../Types'

type Props = {
   anime : animeType,
   children : React.ReactNode
   onAnimeClick : (value : boolean, anime: animeType) => void
}

const TrendingCard = ({anime, children, onAnimeClick}: Props) => {
  const {images, title, score : rate, year} = anime
  const image = images?.webp?.large_image_url
  return (
    <li  className='min-w-[130px] lg:min-w-[180px] h-[170px] relative mb-3'>
        <img onClick={() => onAnimeClick(true, anime)} loading='lazy' className='w-full h-full rounded-lg object-fill cursor-pointer opacity-50' src={image} alt="anime img" />
        <div className="absolute bottom-3 left-[6px] z-10">
            <div className='text-white/95 text-[10px] lg:text-xs font-light flex items-center gap-2'>
              <span>{year}</span>
              <span className='flex items-center gap-[6px]'><PiTelevisionBold/>Anime</span>
              <span className='flex items-center gap-1'>{rate}<AiFillStar className='text-yellow-500'/></span>
            </div>
            <h3 className='text-white text-[13px] font-medium mt-[5px]'>{title}</h3>
        </div>
        {children}
    </li>
  )
}

export default TrendingCard