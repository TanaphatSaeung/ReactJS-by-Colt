export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;
  const isWinner = num1 === num2
  const styles = {color:  isWinner? 'green': "red" , fontSize: isWinner? '40px':"20px" }
  return (
    <div className="DoubleDice" >
      <h2 style={styles} > Double Die </h2>
       {isWinner? <h3 style={styles} > You Win! :) </h3> : null}
      <p>Num1: {num1} </p>
      <p>Num2: {num2} </p>
    </div>
  );
}