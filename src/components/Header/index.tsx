import * as S from './styles'
import Image from 'next/image'
import { ShoppingCart, Search } from '@mui/icons-material'
import Button from '../commons/Button'

export default function Header () {
  return (
    <S.HeaderStyle>
      <Image
        src='/speech-balloon-1.svg'
        width={250}
        height={150}
      />

      <S.RightStyle>
        <S.SearchStyle>
          <S.InputStyle placeholder='...Pesquise seu quadrinho!'/>

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

    </S.HeaderStyle>
  )
}
