


const SkeletonCard = () => {
  return (
    <li className='w-[calc(50%-16px)] animate-pulse  md:w-[calc(33.333%-30px)] lg:w-[130px] h-[170px]  mb-14 md:mb-9'>
        <div className='w-full bg-semiDarkBlue h-full rounded-lg  mb-2'></div>
        <div className="mb-2 flex flex-col items-start">
            <div className=' w-full flex items-center gap-2'>
              <span className="w-10 h-3 bg-semiDarkBlue rounded"></span>
              <span className="w-full h-3 bg-semiDarkBlue rounded"></span>
              <span className="w-full h-3 bg-semiDarkBlue rounded"></span>
            </div>
            <span className='bg-semiDarkBlue w-full h-4 mt-[5px] rounded-md'></span>
        </div>
    </li>
  )
}

export default SkeletonCard