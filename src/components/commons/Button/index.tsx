import { ReactNode } from 'react'
import { ButtonStyle } from './styles'

interface IButton {
  children: ReactNode,
  color?: string,
  margin?: string,
  fontFamily?: string,
  onClick?: () => void
}

export default function Button ({ children, ...props }: IButton) {
  return (
    <ButtonStyle {...props}>
      {children}
    </ButtonStyle>
  )
}
