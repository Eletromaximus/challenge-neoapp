import HomePage from '../src/components/screen/HomePage'
import HOC from '../src/components/wrapper/hoc'

export default function Home () {
  return (
    <HOC propsPage={{
      onOptionsBar: true
    }}>
      <HomePage />
    </HOC>
  )
}
