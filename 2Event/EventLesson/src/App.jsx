import './App.css'
import Clicks from './Clicks'
import Form from './Form'

function App() {

  return (
    <>
      <Clicks message="Hi!!!" buttonText="Click me!" />
      <Clicks message="I said don't!" buttonText="Don't Click this button!" />
      <Form/>
    </>
  )
}

export default App
