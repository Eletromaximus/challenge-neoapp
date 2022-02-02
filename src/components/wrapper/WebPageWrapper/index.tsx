import { ReactNode } from 'react'
import { Box } from '../../../layout/Box'
import SEO from '../../SEO'
import Header from '../../Header'

interface IWebPage {
  children: ReactNode
}

export default function WebPageWrapper ({ children }:IWebPage) {
  return (
    <div>
      <SEO />
      <Header />

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
