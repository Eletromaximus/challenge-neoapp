import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { Box } from '../../layout/Box'
import ItemCard from '../commons/ItemCard'
import { RootState } from '../Store/store'
import { cleanCart, removeHQ } from '../Store/userCartSlice'

interface IShoppingCart {
  onCheckout: () => void
}

interface ICard {
  id: number,
  src: string,
  name: string,
  price: number,
  nContent: number
}

export default function ShoppingCart ({ onCheckout }: IShoppingCart) {
  const dispatch = useDispatch()
  const cart: ICard[] = useSelector((state: RootState) => state.cart)

  return (
    <aside
      style={{
        position: 'absolute',
        zIndex: 1,
        right: 0
      }}
    >
        <Box
          className="shopping-car"
          width={{
            sm: '400px',
            xs: '320px'
          }}
          height='150vh'
          display='flex'
          flexDirection='column'
          border='1px solid gray'
          backgroundColor='#FFFFFF'
        >
          <Box
            display='flex'
            justifyContent='space-between'
            margin='5px'
          >
            <Button
              onClick={() => onCheckout()}
            >
              <h4>Meu Carrinho</h4>
            </Button>

            <Button
              variant='outlined'
              endIcon={<Delete />}
              size='small'
              onClick={() => dispatch(cleanCart())}
            >
              Esvaziar
            </Button>
          </Box>

            {cart.length > 0 && cart.map((item) => (
              <ItemCard
                nContent={item.nContent}
                price={item.price}
                removeMovie={() => dispatch(removeHQ(item.id))}
                name={item.name}
                key={item.id}
              />
            ))}

        </Box>
      </aside>
  )
}
