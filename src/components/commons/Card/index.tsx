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
      <div className="cardImage">
        <img src={
            path + '/portrait_xlarge' + '.' + extension
          }
          alt={name}
        />
      </div>
    </CardStyle>
  )
}
