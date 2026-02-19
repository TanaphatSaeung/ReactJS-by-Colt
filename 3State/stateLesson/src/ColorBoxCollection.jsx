import RandomColorBox from './RandomColorBox'
import './ColorBoxCollection.css'

export default function ColorBoxCollection() {
    const collections = []
    for(let i = 0; i < 25 ; i++) {
        collections.push(<RandomColorBox key={i} />)
    }
 
  return (
    <div className='container'>
    {collections}
    </div>
  )
}