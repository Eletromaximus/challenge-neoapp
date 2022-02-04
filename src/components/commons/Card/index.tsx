import { useDispatch } from 'react-redux'
import { Box } from '../../../layout/Box'
import { addHQ } from '../../Store/userCartSlice'
import Button from '../Button'
import { CardStyle } from './styles'

interface ICard {
  id: number,
  src: string,
  name: string,
  price: number
  nContent: number
}

export default function Card (card: ICard) {
  const dispatch = useDispatch()

  return (
    <CardStyle>
      <div className="cardImage">
        <img src={card.src}
          alt={card.name}
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
        <span>Nome: {card.name}</span> <br/>
        <span>Price: {card.price}</span>

        <Button
          backgroundColor='#276A97'
          color='white'
          padding='10px'
          onClick={() => dispatch(addHQ(card))}
        >
          Comprar
        </Button>
      </Box>
    </CardStyle>
  )
}
