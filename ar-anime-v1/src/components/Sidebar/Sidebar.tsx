import {PiTelevisionBold} from 'react-icons/pi'
import {BsBookmarkFill} from 'react-icons/bs'
import movieImg from '../../assets/Movie.svg'

type Props = {
    //
}

const Sidebar = (props: Props) => {
  return (
    <header className="w-full md:w-[calc(100%-48px)] lg:w-24 h-14 lg:h-[calc(100%-64px)] p-4 md:p-6 bg-semiDarkBlue flex lg:flex-col justify-between items-center md:rounded-[10px] lg:rounded-[20px] fixed z-10">
        <img src={movieImg} alt="movie img" />
        <PiTelevisionBold className={'w-4 h-4 md:w-5 md:h-5 text-white cursor-pointer'}/>
        <BsBookmarkFill className={'w-4 h-4 md:w-5 md:h-5 text-grBlue cursor-pointer'}/>
    </header>
  )
}

export default Sidebar