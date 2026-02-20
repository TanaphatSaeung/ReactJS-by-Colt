
import './App.css';
import Counter from './Counter';
import Dumbo from './Dumbo';
import ScoreKeeper from './ScoreKeeper';
import EmojiCricker from './EmojiCricker';

function App() {

  return (
    <>
      <h1>Score Keeper</h1>
      <ScoreKeeper numPlayer={4} target={3} />
    </>
  )
}

export default App
