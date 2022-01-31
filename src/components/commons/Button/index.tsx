import { ReactNode } from 'react'
import { ButtonStyle } from './styles'

interface IButton {
  children: ReactNode
}

export default function Button ({ children }: IButton) {
  return (
    <ButtonStyle>
      {children}
    </ButtonStyle>
  )
}
