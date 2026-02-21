import LuckyN from './LuckyN'
import BoxGrid from './BoxGrid'
import { sum } from './utils'
import './App.css'

function lessthan4(dice) {
  return sum(dice) < 4
}

function allSameValue(dice) {
  return dice.every((v) => v === dice[0])
}

function App() {
  return (
    <>
      {/* <LuckyN /> */}
      {/* <LuckyN title='Roll less than 4' winCheck={lessthan4} dice={[1,2,3]} />
      <LuckyN title='Roll the same number' winCheck={allSameValue} dice={[1,2,3]} /> */}
      <BoxGrid />
    </>
  )
}

export default App
