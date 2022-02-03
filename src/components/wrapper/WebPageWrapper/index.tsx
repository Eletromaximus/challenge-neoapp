import { ReactNode } from 'react'
import { Box } from '../../../layout/Box'
import SEO from '../../SEO'
import Header from '../../Header'
import OptionsBar from '../../commons/OptionsBar'

interface IWebPage {
  children: ReactNode,
  onOptionsBar: boolean
}

export default function WebPageWrapper ({
  children,
  onOptionsBar
}:IWebPage) {
  return (
    <div>
      <SEO />
      <Header />
      {onOptionsBar && <OptionsBar />}

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
