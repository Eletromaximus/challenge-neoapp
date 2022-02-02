import axios from 'axios'
import { useEffect, useState } from 'react'
import Card from '../commons/Card'

interface IContent {
  id: number,
  thumbnail: {
    path: string,
    extension: string
  },
  name: string
}

export default function HomePage () {
  const [marvel, setMarvel] = useState([])

  async function listHQs () {
    await axios
      .get('http://localhost:3000/api/marvelapi')
      .then((response) => {
        const { results } = response.data
        setMarvel(results)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    listHQs()
  })

  return (
    <ul style={{
      display: 'flex',
      flexWrap: 'wrap',
      listStyle: 'none',
      flex: 1
    }}>
      {marvel && marvel.map((content: IContent) => {
        return <li key={content.id}>
          <Card
          path={content.thumbnail.path}
          extension={content.thumbnail.extension}
          name={content.name}
          />
        </li>
      })}
    </ul>
  )
}
