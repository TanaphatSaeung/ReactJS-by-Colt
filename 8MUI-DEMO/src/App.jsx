import './App.css'
import Button from '@mui/material/Button';
import RatingDemo from './RatingDemo';

function App() {

  return (
    <>
      <Button variant="contained" onClick={() => alert('Hi')}>Contained</Button>
      <RatingDemo />
    </>
  )
}

export default App
