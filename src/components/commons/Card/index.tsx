import { CardStyle } from './styles'

interface ICard {
  path: string,
  extension: string,
  name: string
}

export default function Card ({
  path,
  extension,
  name
}: ICard) {
  return (
    <CardStyle>
      <img src={
        path + '/portrait_xlarge' + '.' + extension
      } alt={name} />
    </CardStyle>
  )
}