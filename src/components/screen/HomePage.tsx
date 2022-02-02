import axios from 'axios'
import { useEffect, useState } from 'react'
import { Grid } from '../../layout/Grid'
import Card from '../commons/Card'

interface IContent {
  id: number,
  thumbnail: {
    path: string,
    extension: string
  },
  name: string
}

const INITIAL_STATE = () => {
  const initial = []
  for (let i = 0; i < 10; i++) {
    initial.push({
      id: i,
      thumbnail: {
        path: './placeholder',
        extension: 'png'
      },
      name: ''
    })
  }
  return initial
}

export default function HomePage () {
  const [marvel, setMarvel] = useState(INITIAL_STATE)
  const [apiConfirm, setApiConfirm] = useState(false)

  const x = apiConfirm === true ? '/portrait_xlarge' : ''

  async function listHQs () {
    await axios
      .get('http://localhost:3000/api/marvelapi')
      .then((response) => {
        const { results } = response.data
        setMarvel(results)
        setApiConfirm(true)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    console.log(marvel)
    // listHQs()
  })

  return (
    <Grid
      value={10}
    >
      <ul style={{
        display: 'flex',
        flexWrap: 'wrap',
        listStyle: 'none',
        flex: 1
      }}>
        { marvel.map((content: IContent) => {
          return <li key={content.id}>
            <Card
              src={
                content.thumbnail.path +
                x +
                '.' +
                content.thumbnail.extension
              }
              name={content.name}
            />
          </li>
        })}
      </ul>
    </Grid>
  )
}
