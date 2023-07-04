type Props = {
    text : string,
    value : string
}

const AnimeInfo = ({text, value}: Props) => {
  return (
    <div className='flex flex-col items-start mb-2'>
        <span className='text-white/70 font-medium text-sm'>{text}</span>
        <span className='text-white/40 font-light text-xs'>{value}</span>
  </div>
  )
}

export default AnimeInfo