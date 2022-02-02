import * as S from './styles'
import Image from 'next/image'
import { ShoppingCart, Search } from '@mui/icons-material'
import Button from '../commons/Button'

export default function Header () {
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

        <Button>
          <ShoppingCart fontSize='large' />

          <S.NumberItemsStyle>
            <span>
              1
            </span>
          </S.NumberItemsStyle>
        </Button>
      </S.RightStyle>

    </S.NavStyle>
  )
}
