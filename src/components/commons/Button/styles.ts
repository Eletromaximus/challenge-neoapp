import styled from 'styled-components'
import propToStyle from '../../../utils/propToStyle'

interface IButton {
  color?: string,
  margin?: string
}

export const ButtonStyle = styled.button<IButton>`
  border: 0;
  padding: 0;
  background-color: transparent;

  ${propToStyle('fontFamily')}
  ${propToStyle('color')}
  ${propToStyle('margin')}

`
