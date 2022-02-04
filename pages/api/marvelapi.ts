// import axios from 'axios'
import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'
import crypto from 'crypto'

export default async function marvelApi (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { search } = req.body
    const time = Number(new Date())

    const hash = crypto
      .createHash('md5')
      .update(
        time +
        String(process.env.PRIVATE_KEY_MARVEL) +
        String(process.env.PUBLIC_KEY_MARVEL)
      )
      .digest('hex')

    await axios.get(
        `http://gateway.marvel.com/v1/public/${search}?ts=${time}&apikey=${
          process.env.PUBLIC_KEY_MARVEL
        }&hash=${hash}`
    )
      .then((response) => {
        return res.send(response.data.data)
      })
      .catch((err) => {
        return res.status(429).send(err.response.statusText)
      })
  }
  res.status(500)
}
