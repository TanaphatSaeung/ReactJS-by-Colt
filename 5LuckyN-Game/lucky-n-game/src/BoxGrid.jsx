import { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css";

export default function BoxGrid({ numBoxes = 9 }) {
  const [boxes, setBoxes] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);

  const toggleIsActive = (idx) => setBoxes((oldBoxes) => oldBoxes.map((value, i) => i === idx? !value:value))
  const reset = () => setBoxes((prev) => prev.map(() => false))
  
  return (
    <div className="BoxGrid">
      {boxes.map((b, idx) => (
        <Box
          key={idx}
          isActive={b}
          toggleIsActive={() => toggleIsActive(idx)}
        />
      ))}
      <button onClick={reset}>Reset</button>
    </div>
  );
}
