import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { RootState } from '../Store/store'
import { Box } from '../../layout/Box'
import { Grid } from '../../layout/Grid'
import Card from '../commons/Card'
import { useSelector } from 'react-redux'

interface IContent {
  id: number,
  thumbnail: {
    path: string,
    extension: string
  },
  name: string,
  title: string,
  nContent: number,
  price: number
}

const INITIAL_STATE = () => {
  const initial = []
  for (let i = 0; i < 20; i++) {
    initial.push({
      id: i,
      thumbnail: {
        path: './placeholder',
        extension: 'png'
      },
      name: '',
      nContent: 1
    })
  }
  return initial
}

export default function HomePage () {
  const [marvel, setMarvel] = useState(INITIAL_STATE)
  const apiConfirm = useRef(false)
  const optionsSearch = useSelector((state: RootState) => state.options)

  const x = apiConfirm.current === true ? '/portrait_xlarge' : ''

  async function listHQs () {
    await axios
      .post('http://localhost:3000/api/marvelapi', {
        search: optionsSearch
      })
      .then((response) => {
        if (response.status !== 429) {
          const { results } = response.data
          apiConfirm.current = true
          setMarvel(results)
        } else {
          console.log(response)
        }
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    listHQs()
  }, [optionsSearch])

  return (
    <Grid
      value={{
        lg: 8,
        md: 10,
        sm: 12
      }}
      padding='0'
    >
      <Box
        display='flex'
        flexWrap='wrap'
        listStyle='none'
        justifyContent={{
          xs: 'center'
        }}
        padding='0'
        flex={1}
      >
        { marvel.map((content: IContent) => {
          return <li key={content.id}>
            <Card
              src={
                content.thumbnail.path +
                x +
                '.' +
                content.thumbnail.extension
              }
              name={content.name || content.title}
              price={5}
              id={content.id}
              nContent={1}
            />
          </li>
        })}
      </Box>
    </Grid>
  )
}
