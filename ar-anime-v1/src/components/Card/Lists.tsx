import { ReactNode } from "react"

type Props = {
    children : ReactNode,
    querry ? : string
    text ? : string
}


const Lists = ({children, querry, text}: Props) => {
  const label = text ? text : querry && querry.length > 3 ? 'Results' : "Recommanded for you" 
  //to do later pass span text as props
  return (
    <div className="flex flex-col gap-4 md:gap[25px] mt-[26px] md:mt-[35px]" >
        <span className="text-xl md:text-[32px] text-white font-light tracking-[-0.312px] md:tracking-[-0.5px]">{label}</span>
        {children}
    </div>
  )
}

export default Lists