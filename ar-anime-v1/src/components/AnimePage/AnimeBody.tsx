import { animeType } from '../../../Types'
import AnimeInfo from './AnimeInfo'

type Props = {
    details : animeType
}

const AnimeBody = ({details}: Props) => {
  const  {synopsis : description, genres, duration, studios, aired} = details
  return (
    <div className='bg-semiDarkBlue rounded-md p-4'>
        <p className='text-white/70 font-light text-xs lg:text-sm leading-5 lg:leading-6 mb-2'>{description}</p>
        <div className='flex items-center gap-1 mb-2'>
            {genres.map(g =>  <span key={g.mal_id} className=' bg-darkBlue/80 rounded-full px-3 py-1 text-grBlue text-xs'>{g.name}</span>)}
        </div>
        <div className='grid pl-[6px] grid-cols-2 items-center'>
            <AnimeInfo text='Duration' value={duration?.slice(0, 6)}/>
            <AnimeInfo text='Studio' value={studios[0].name}/>
            <AnimeInfo text='aired From' value={aired.from?.split('T')[0]}/>
            <AnimeInfo text='To' value={aired.to ? aired.to.split('T')[0] : '?'}/>
        </div>
    </div>
  )
}

export default AnimeBody