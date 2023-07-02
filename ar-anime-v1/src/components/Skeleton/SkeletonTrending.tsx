import Skeleton from "./Skeleton"
const arr = Array.from({length:8}, () => Math.random())

const SkeltonTrending= () => {
  return (
    <div className="flex flex-col gap-4 md:gap[25px] mt-[26px] md:mt-3" >
     <span className=" animate-pulse bg-semiDarkBlue w-1/3 h-4 mt-[5px] rounded-md"></span>
     <ul  className='mt-1 mb-3 flex items-center gap-4 overflow-hidden'>
        {arr.map(v => <Skeleton key={v}/>)}
     </ul>
    </div>
  )
}

export default SkeltonTrending