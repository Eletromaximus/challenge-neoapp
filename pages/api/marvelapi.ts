// import axios from 'axios'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

export default async function marvelApi (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const time = Number(new Date())

    const hash = crypto
      .createHash('md5')
      .update(
        time +
        String(process.env.PRIVATE_KEY_MARVEL) +
        String(process.env.PUBLIC_KEY_MARVEL)
      )
      .digest('hex')

    const result = await axios.get(
        `http://gateway.marvel.com/v1/public/characters?ts=${time}&apikey=${
          process.env.PUBLIC_KEY_MARVEL
        }&hash=${hash}`
    )
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.log(err)
        return err
      })
    res.send(result.data)
  }
  res.status(500)
}
