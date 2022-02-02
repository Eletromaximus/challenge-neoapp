import { ReactNode } from 'react'
import { Box } from '../../../layout/Box'
import { Grid } from '../../../layout/Grid'
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
          <Grid
            value={10}
          >
            <ul style={{
              display: 'flex',
              flexWrap: 'wrap',
              listStyle: 'none',
              flex: 1
            }}>
              {children}
            </ul>
          </Grid>
        </Box>
      </main>

      <footer>
        Data provided by Marvel. © 2014 Marvel
      </footer>
    </div>
  )
}
