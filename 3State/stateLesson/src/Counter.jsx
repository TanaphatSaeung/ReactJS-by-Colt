import { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(5);
  console.log(`New Value num: ${num}`);
  const incrementNum = () => {
    setNum(num + 1);
    console.log(`Old Value num: ${num}`);
  };
  return (
    <div>
      <p>The count is: {num} </p>
      <button onClick={incrementNum}>Increment</button>
    </div>
  );
}
