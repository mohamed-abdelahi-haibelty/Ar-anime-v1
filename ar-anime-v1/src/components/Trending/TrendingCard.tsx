import {AiFillStar} from 'react-icons/ai'
import {PiTelevisionBold} from 'react-icons/pi'

type Props = {
   image : string,
   title : string,
   rate : number,
   year : string
}

const TrendingCard = ({image, title, rate, year}: Props) => {
  return (
    <li className='min-w-[130px] lg:min-w-[180px] h-[170px] relative mb-3'>
        <img loading='lazy' className='w-full h-full rounded-lg object-fill opacity-50' src={image} alt="anime img" />
        <div className="absolute bottom-3 left-[6px] z-10">
            <div className='text-white/95 text-[10px] lg:text-xs font-light flex items-center gap-2'>
              <span>{year}</span>
              <span className='flex items-center gap-[6px]'><PiTelevisionBold/>Anime</span>
              <span className='flex items-center gap-1'>{rate}<AiFillStar className='text-yellow-500'/></span>
            </div>
            <h3 className='text-white text-[13px] font-medium mt-[5px]'>{title}</h3>
        </div>
    </li>
  )
}

export default TrendingCard