import { Box } from '../../../layout/Box'
import { CardStyle } from './styles'

interface ICard {
  src: string,
  name: string
}

export default function Card ({
  src,
  name
}: ICard) {
  return (
    <CardStyle>
      <div className="cardImage">
        <img src={src}
          alt={name}
        />
      </div>
      <Box
        className="infos"
        fontFamily='Bangers'
      >
        <span>Nome: {name}</span>
      </Box>
    </CardStyle>
  )
}
