import { useState } from "react";

export default function Counter() {
    const [count,setCount] = useState(0)
    const incrementCount = () => {
        setCount(count+1)
    }
    const addThree = () => {
        setCount(currentCount => currentCount + 1)
        setCount(currentCount => currentCount + 1)
        setCount(a => a + 1)
    }
    console.log('RE-RENDERED!!');
    
    const setToTen = () => {
        setCount(10)
    }
    return(
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount} >+1</button>
            <button onClick={addThree} >+3</button>
            <button onClick={setToTen} >Set to Ten</button>
        </div>
    )
}
