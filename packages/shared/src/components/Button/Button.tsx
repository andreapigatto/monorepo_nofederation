import { ReactNode } from 'react'

export type ComponentProps = {
  children: ReactNode
}
const Button = ({ children }: ComponentProps) => {
  const onClickHandler = () => {
    console.warn('button clicked!')
  }

  return (
    <button type="button" onClick={onClickHandler}>
      {children}
    </button>
  )
}

export default Button
