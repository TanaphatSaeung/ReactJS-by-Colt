import { useState } from "react";
import "./Toggler.css";

export default function ToggleCounter() {
  const [isHappy, setIsHappy] = useState(true);
  const [count, setcount] = useState(0);
  const toggleIsHappy = () => setIsHappy(!isHappy)
  const incrementCount = () => setcount(count+1) 

  return (
    <>
      <p
        className="Toggler"
        onClick={toggleIsHappy}
      >
        {isHappy ? "😆" : "🥲"}
      </p>
      <p >{count}</p>
      <button onClick={incrementCount}>increment Count</button>
    </>
  );
}
