import FruitRandom from "./FruitRandom";

export default function SlotMachine() {
  let randoms = [];
  for (let i = 0; i < 3; i++) {
    randoms.push(Math.floor(Math.random() * 3) + 1);
  }
  const isWin = randoms[0] === randoms[1] && randoms[0] === randoms[2];

  return (
    <>
      <h2>
        <FruitRandom r={randoms[0]} /> <FruitRandom r={randoms[1]} />{" "}
        <FruitRandom r={randoms[2]} />
      </h2>
      <h1 style={{ color: isWin ? "green" : "red" }}>
        {isWin ? "You Win!" : "You Lose"}
      </h1>
      {isWin ? <h2 style={{ margin: "10px" }}>Congrats!!!</h2> : null}
    </>
  );
}
