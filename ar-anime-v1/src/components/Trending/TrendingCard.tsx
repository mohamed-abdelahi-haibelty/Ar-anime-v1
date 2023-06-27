import {AiFillStar} from 'react-icons/ai'
import {PiTelevisionBold} from 'react-icons/pi'

type Props = {
    src : string
}

const TrendingCard = ({src}: Props) => {
  return (
    <div className='min-w-[120px] h-[170px] relative mt-5 mb-3'>
        <img className='w-full h-full rounded-lg object-contain opacity-50' src={src} alt="bleach img" />
        <div className="absolute bottom-3 left-[6px] z-10">
            <div className='text-white/95 text-[10px] font-light flex items-center gap-2'>
              <span>2020</span>
              <span className='flex items-center gap-[6px]'><PiTelevisionBold/>Anime</span>
              <span className='flex items-center gap-1'>9.5<AiFillStar className='text-yellow-500'/></span>
            </div>
            <h3 className='text-white text-[13px] font-medium mt-[5px]'>Naruto shippudden</h3>
        </div>
    </div>
  )
}

export default TrendingCard