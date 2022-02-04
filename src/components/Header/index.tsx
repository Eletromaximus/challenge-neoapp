import * as S from './styles'
import Image from 'next/image'
import { ShoppingCart, Search } from '@mui/icons-material'
import Button from '../commons/Button'
import { useSelector } from 'react-redux'
import { RootState } from '../Store/store'

interface IHeader {
  onCartShopping: () => void
}

export default function Header ({ onCartShopping }: IHeader) {
  const items = useSelector((state: RootState) => state.cart)

  return (
    <S.NavStyle>
      <div className="image">
        <Image
          src='/speech-balloon-1.svg'
          width={250}
          height={150}
          layout='fixed'
          priority={true}
        />
      </div>

      <S.RightStyle>
        <S.SearchStyle
          className='search'
        >
          <S.InputStyle
            className='search-input'
            placeholder='...Pesquise seu quadrinho!'
          />

          <Search fontSize='large'/>
      </S.SearchStyle>

        <Button
          onClick={() => onCartShopping()}
        >
          <ShoppingCart fontSize='large' />

          {items && <S.NumberItemsStyle>
            <span>
              1
            </span>
          </S.NumberItemsStyle>}
        </Button>
      </S.RightStyle>

    </S.NavStyle>
  )
}
