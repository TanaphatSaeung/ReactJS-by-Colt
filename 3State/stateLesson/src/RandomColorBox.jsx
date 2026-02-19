import { useState } from "react";
import "./RandomColorBox.css";

const randomColorF = () => Math.ceil(Math.random() * 256) - 1;

export default function RandomColorBox() {
  const [randomColor, setRandomColor] = useState(
    `rgb(${randomColorF()}, ${randomColorF()}, ${randomColorF()})`,
  );
  const changeColor = () =>
    setRandomColor(
      `rgb(${randomColorF()}, ${randomColorF()}, ${randomColorF()})`,
    );

  return (
    <div
      className="boxColor"
      onClick={changeColor}
      style={{ backgroundColor: randomColor }}
    ></div>
  );
}
