
import SkeletonCard from "./SkeletonCard"
const arr = Array.from({length:25}, () => Math.random())

const SkeltonRecommended= () => {
  return (
    <div className="flex flex-col gap-4 md:gap[25px] mt-[26px] md:mt-1" >
     <span className="bg-semiDarkBlue animate-pulse w-1/3 h-4 mt-[5px] rounded-md"></span>
     <ul  className='mt-1 mb-3 flex items-center gap-4 md:gap-[30px] lg:gap-10 flex-wrap'>
        {arr.map(v => <SkeletonCard key={v}/>)}
     </ul>
    </div>
  )
}

export default SkeltonRecommended