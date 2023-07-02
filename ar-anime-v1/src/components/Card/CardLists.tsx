// import trendingImg from '../../assets/b.webp'
// import atackImg from '../../assets/100633.jpg'
// import cuteImg from '../../assets/cute.jpg'
// import gintamaImg from '../../assets/gintama.webp'
// import stinsImg from '../../assets/stins.webp'
import Card from './Card'

// const imgs = [trendingImg, atackImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg, cuteImg, gintamaImg, stinsImg]

type Props = {
    recommendedAnime : [] | never[]
}

const CardLists = ({recommendedAnime}: Props) => {
    // to do later pass trending card data as props.
  return (
    <ul  className='mt-5 mb-3 flex items-center gap-4 md:gap-[30px] lg:gap-10 flex-wrap'>
        {recommendedAnime.map(anime => {
           const {mal_id, images, title, year, score} = anime
           const image = images?.webp?.large_image_url
           return <Card 
           key={mal_id} 
           image={image} 
           title={title} 
           year={year}
           rate={Number(score)}
           />
        })}
    </ul>
  )
}

export default CardLists