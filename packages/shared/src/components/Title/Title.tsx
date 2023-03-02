import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}
const Title = ({ children }: ComponentProps) => {
  return <h1>{children}</h1>
}

export default Title
