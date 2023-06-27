import trendingImg from '../../assets/b.webp'
import atackImg from '../../assets/100633.jpg'
import cuteImg from '../../assets/cute.jpg'
import gintamaImg from '../../assets/gintama.webp'
import stinsImg from '../../assets/stins.webp'
import TrendingCard from './TrendingCard'

const imgs = [trendingImg, atackImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg]

type Props = {
    //
}

const TrendingLists = (props: Props) => {
  return (
    <div className='mt-5 mb-3 flex  items-center gap-4 overflow-x-scroll'>
        {imgs.map(i => <TrendingCard src={i} key={i}/>)}
    </div>
  )
}

export default TrendingLists