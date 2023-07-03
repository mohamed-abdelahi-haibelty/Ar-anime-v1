import {PiTelevisionBold} from 'react-icons/pi'
import {BsBookmarkFill} from 'react-icons/bs'
import movieImg from '../../assets/Movie.svg'
import { useState } from 'react'

type Props = {
    onRoute : (route : string) => void
}

const Sidebar = ({onRoute}: Props) => {
  const [active, setActive] = useState('home')
  function handleRoute(route : string){
    setActive(route)
    onRoute(route)
  }
  return (
    <header className="w-full md:w-[calc(100%-48px)] lg:w-24 h-14 md:h-[72px] lg:h-[calc(100%-64px)] p-4 md:p-6 bg-semiDarkBlue flex lg:flex-col justify-between items-center md:rounded-[10px] lg:rounded-[20px] fixed top-0 md:top-8 z-50">
        <picture>
          <source type='image/webp' />
          <img src={movieImg} alt="movie icon" />
        </picture>
        <PiTelevisionBold onClick={() => handleRoute('home')} className={`w-4 h-4 md:w-5 md:h-5 text-white cursor-pointer hover:text-anRed transition ${active === 'home' && 'text-anRed'}`}/>
        <BsBookmarkFill onClick={() => handleRoute('bookmark')} className={`w-4 h-4 md:w-5 md:h-5 text-grBlue cursor-pointer hover:text-anRed transition ${active === 'bookmark' && 'text-anRed'}`}/>
    </header>
  )
}

export default Sidebar