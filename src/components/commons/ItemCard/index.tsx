import { Button } from '@material-ui/core'
import { Delete } from '@mui/icons-material'
import { Box } from '../../../layout/Box'

export interface IItemCard {
  name: string,
  nContent: number,
  price: number,
  removeMovie: () => void
}

export default function ItemCard (item: IItemCard) {
  return (
    <Box
      key={item.name}
      className="product"
      width='100%'
      padding='5px'
      display='flex'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box
        width='64px'
        height='64px'
        className="icone-of-movie"
      >
        <img src="./icone-loading.png" alt="" />
      </Box>

      <Box className="name-of-product">
        {item.name.substring(0, 18)}
      </Box>

      <Box
        justifyContent='space-between'
        display='flex'
        width='90px'
      >
        <p>{item.nContent}</p>
        <p>R$ {item.price}</p>
      </Box>

      <Button
        variant='outlined'
        endIcon={<Delete />}
        size='small'
        onClick={() => item.removeMovie()}
      />
    </Box>
  )
}
