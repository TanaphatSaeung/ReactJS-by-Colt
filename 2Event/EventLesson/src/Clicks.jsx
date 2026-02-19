function handleClick(msg){
    alert(msg)
}

export default function Clicks({message,buttonText}) {
    const alertFunction = () => {
        alert(message)
    }
    return (
    <>
      <button onClick={() => handleClick(message)}>{buttonText}</button>
      <button onClick={alertFunction}>{buttonText}</button>
      <button onClick={() => alert(message)}>{buttonText}</button>
    </>
  )
}