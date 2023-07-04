
import { animeType } from '../../../Types'
import AnimeBody from './AnimeBody'
import AnimeHeader from './AnimeHeader'
// import ReactPlayer from 'react-player/youtube'
// <div className='my-4 rounded-lg lg:h-[260px] lg:w-[400px] '>
// <ReactPlayer style={{borderRadius : '20px'}}  url={"https://www.youtube.com/watch?v=LHtdKWJdif4"} width="100%" height="100%" controls/>
// </div>

type Props = {
    details : animeType 
}

const AnimePage = ({details}: Props) => {
  return (
    <div className="mt-20 ">
        {/*<img className='w-full h-48 opacity-20 absolute z-0 left-0  top-14' src={bg} alt="anime img" /> */}
        <div className='w-screen left-0 bg-gradient-to-r from-teal-950 via-transparent to-semiDarkBlue h-48 absolute z-0 top-[1px]'>
        </div>
        <AnimeHeader details={details}/>
        <AnimeBody details={details}/>
    </div>
  )
}

export default AnimePage