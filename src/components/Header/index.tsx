import { HeaderStyle, SearchStyle, RightStyle } from './styles'
import Image from 'next/image'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import Button from '../commons/Button'

export default function Header () {
  return (
    <HeaderStyle>
      <Image
        src='/speech-balloon-1.svg'
        width={250}
        height={150}
      />

      <RightStyle>
        <SearchStyle />
        <Button>
          <ShoppingCartIcon />
        </Button>
      </RightStyle>

    </HeaderStyle>
  )
}
