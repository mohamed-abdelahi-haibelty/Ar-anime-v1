import {AiFillStar} from 'react-icons/ai'
//import attack from '../../assets/100633.jpg'
import { animeType } from '../../../Types'

type Props = {
    details : animeType
}

function AnimeHeader({details}: Props) {
  const {title, status, broadcast, season, year, rating, score, scored_by, images} = details
  const image = images.webp.large_image_url
  return (
    <div className='w-full h-48 relative'>
            <div className='flex z-20 items-center gap-4 mb-4'>
                <img src={image} className='w-28 h-36 rounded' loading='lazy' alt="anime img" />
                <div className='flex flex-col gap-1'>
                    <h2 className='text-white text-sm font-medium'>{title}</h2>
                    <span className='text-white/80 text-xs font-light'>{status}({broadcast.day})</span>
                    <span className='text-white/80 text-xs font-light'>{year} {season}</span>
                    <span className='text-white/80 text-xs font-light'>{rating}</span>
                </div>
                <div className='flex flex-col items-center gap-[2px]'>
                    <AiFillStar className="text-yellow-500"/>
                    <span className='text-white font-normal text-sm'>{score}
                        <small className='text-white/80 font-light text-xs'>/10</small>
                    </span>
                    <span className='text-white/80 font-light text-xs'>{scored_by}</span>
                </div>
            </div>
    </div>
  )
}

export default AnimeHeader