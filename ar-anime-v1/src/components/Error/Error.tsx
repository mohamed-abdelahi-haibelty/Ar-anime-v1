
type Props = {
  error : string
}

const Error = ({error} : Props) => {
  return (
    <div className="absolute left-2/4 top-2/4 translate-x-[-50%] translate-y-[-50%]">
      <h1 className="text-3xl text-center font-bold text-white/90">
        {error}
      </h1>
    </div>
  )
}

export default Error