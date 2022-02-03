import { Box } from '../../../layout/Box'
import Button from '../Button'
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
        display='flex'
        flexDirection='column'
        className="infos"
        fontFamily='Bangers'
        alignItems='initial'
        width='100%'
      >
        <span>Nome: {name}</span> <br/>
        <Button
          backgroundColor='#276A97'
          color='white'
          padding='10px'
        >
          Comprar
        </Button>
      </Box>
    </CardStyle>
  )
}
