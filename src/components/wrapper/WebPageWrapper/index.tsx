import { ReactNode, useState } from 'react'
import { Box } from '../../../layout/Box'
import SEO from '../../SEO'
import Header from '../../Header'
import OptionsBar from '../../OptionsBar'
import ShoppingCart from '../../ShoppingCart'
import { useDispatch } from 'react-redux'
import { cleanCart } from '../../Store/userCartSlice'
interface IWebPage {
  children: ReactNode,
  onOptionsBar: boolean
}

export default function WebPageWrapper ({
  children,
  onOptionsBar
}:IWebPage) {
  const dispatch = useDispatch()
  const [onCart, setOnCart] = useState(false)
  return (
    <div>
      <SEO />
      <Header onCartShopping={
        () => setOnCart(!onCart)
      }/>
      {onOptionsBar && <OptionsBar />}
      { onCart && <ShoppingCart
        onCheckout={() => dispatch(cleanCart())}
      />}

      <main>
        <Box
          display='flex'
          alignItems='center'
          justifyContent='center'
          margin='20px 0'
        >
          {children}
        </Box>
      </main>

      <footer>
        Data provided by Marvel. © 2014 Marvel
      </footer>
    </div>
  )
}

WebPageWrapper.defaultProps = {
  onOptionsBar: false
}
