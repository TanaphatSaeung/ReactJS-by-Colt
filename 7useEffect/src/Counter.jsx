import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(
    function myEffect() {
      console.log("Called");
    },
    [],
  );

  const increament = () => {
    setCount((c) => c + 1);
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={increament}>+1</button>
      <p>Name: {name}</p>
      <input name="name" value={name} onChange={handleChange} type="text" />
    </div>
  );
}
