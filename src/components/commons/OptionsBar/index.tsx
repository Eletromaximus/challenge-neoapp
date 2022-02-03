import Button from '../Button'
import { StyleOptionsBar } from './styles'
import { comicsOption, charactersOption } from '../../Store/userSlice'
import { useDispatch } from 'react-redux'

const buttonsConfig = {
  color: '#F8E822',
  margin: '0 20px',
  fontFamily: 'Bangers'
}

// interface IOptionBar {
//   commicsButton: () => void,
//   caractersButton: () => void,
// }

export default function OptionsBar () {
  const dispatch = useDispatch()

  return (
    <StyleOptionsBar>
      <Button
        {...buttonsConfig}
        onClick={() => dispatch(comicsOption())}
      >
        Comics
      </Button>

      <Button
        {...buttonsConfig}
        onClick={() => dispatch(charactersOption())}
      >
        Characters
      </Button>
    </StyleOptionsBar>
  )
}
