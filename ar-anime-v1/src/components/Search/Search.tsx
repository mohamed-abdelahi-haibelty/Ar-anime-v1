import {RiSearchLine} from 'react-icons/ri'

type Props = {
  querry : string,
  handleSearch : (e : string) => void
  placeholder? : string
}

const Search = ({querry, handleSearch, placeholder}: Props) => {
  return (
    <div className='flex items-center gap-4 mt-[66px] md:mt-[128px] lg:mt-16'>
        <RiSearchLine className='text-white w-6 h-6 md:w-8 md:h-8'/>
        <div className='relative flex-1 group'>
          <input value={querry} onChange={(e) => handleSearch(e.target.value)} className='w-full  text-white text-base md:text-2xl font-light 
          placeholder-white/50 bg-transparent outline-none ' type="text" placeholder={placeholder} />
          <span className='w-full h-[1px] bg-grBlue hidden group-hover:block absolute left-0 bottom-[-5px] transition'></span>
        </div>
    </div>
  )
}

export default Search