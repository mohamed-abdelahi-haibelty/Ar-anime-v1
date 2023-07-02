// import trendingImg from '../../assets/b.webp'
// import atackImg from '../../assets/100633.jpg'
// import cuteImg from '../../assets/cute.jpg'
// import gintamaImg from '../../assets/gintama.webp'
// import stinsImg from '../../assets/stins.webp'
import TrendingCard from './TrendingCard'

// const imgs = [trendingImg, atackImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg]

type Props = {
    topAnime : [] | never[]
}

const TrendingLists = ({topAnime}: Props) => {
    // to do later pass trending card data as props.
  return (
    <ul  className='mt-5 mb-3 flex items-center gap-4 overflow-x-scroll'>
        {topAnime.map(anime => {
            const {mal_id, images, title_english, year, score} = anime
            const image = images?.webp?.large_image_url
            return <TrendingCard 
            key={mal_id} 
            image={image} 
            title={title_english} 
            year={year}
            rate={Number(score)}
            />
        })}
    </ul>
  )
}

export default TrendingLists