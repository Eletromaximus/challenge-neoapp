import axios from 'axios'
import { useEffect } from 'react'
import Header from '../src/components/Header'
import SEO from '../src/components/SEO'
import { Box } from '../src/layout/Box'
import { Grid } from '../src/layout/Grid'
import crypto from 'crypto'

export default function Home () {
  // const [marvel, setMarvel] = useState()
  const PUBLIC_KEY_MARVEL = '37b0977bfe58e6f4ac76d7be74ea27c8'
  const PRIVATE_KEY_MARVEL = '1d9fbf847e881f5562e747cb5ca9e6faaa8105b3'

  const time = Number(new Date())

  const hash = crypto
    .createHash('md5')
    .update(time + PRIVATE_KEY_MARVEL + PUBLIC_KEY_MARVEL)
    .digest('hex')

  async function listHQs () {
    const list = await
    axios.get(`http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${PUBLIC_KEY_MARVEL}&hash=${hash}`)
      .then((response) => {
        console.log(response)
      })
      .catch((err) => {
        console.log(err)
        return err
      })

    return list
  }

  useEffect(() => {
    listHQs()
  })

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
            Olá
          </Grid>
        </Box>

      </main>
    </div>
  )
}
