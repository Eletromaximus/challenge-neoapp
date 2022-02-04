import { Box } from '../../layout/Box'
import { Grid } from '../../layout/Grid'

export default function HQScreen () {
  return (
    <Box
    id='buy-form'
    display='flex'
    justifyContent={{
      md: 'space-around',
      sm: 'center'
    }}
    width='100%'
    flexWrap='wrap'
  >
    <Grid
      value={4}
      minWidth={{
        sm: '450px',
        xs: '320px'
      }}
    >

    </Grid>

    <Grid
        id='buy-cart'
        value={4}
        minWidth={{
          sm: '450px',
          xs: '320px'
        }}
        margin='80px 0 0 0'
      >

      </Grid>
  </Box>

  )
}
