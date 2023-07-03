import {AiFillStar} from 'react-icons/ai'
import {PiTelevisionBold} from 'react-icons/pi'
import {animeType} from '../../../Types'

type Props = {
  anime : animeType,
  children : React.ReactNode
}
//className="absolute bottom-[-50px] left-[6px] z-10"

const Card = ({anime, children}: Props) => {
  const {images, title, score : rate, year} = anime
  const image = images?.webp?.large_image_url
  return (
    <li className='w-[calc(50%-16px)] md:w-[calc(33.333%-30px)] lg:w-[130px] h-[170px] relative mb-14 md:mb-9'>
        <img loading='lazy' className='w-full h-full rounded-lg object-fill mb-2' src={image} alt="anime img" />
        <div className="mb-2 flex flex-col items-start">
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

export default Card