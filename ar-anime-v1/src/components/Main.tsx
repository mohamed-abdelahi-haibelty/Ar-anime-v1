import { ReactNode } from "react"

type Props = {
    children : ReactNode
}

const Main = ({children}: Props) => {
  return (
    <main className="m-4 lg:ml-[125px]">
        {children}
    </main>
  )
}

export default Main