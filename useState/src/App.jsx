import { useState } from "react"

export default function App() {
  const [counter, setCounter] = useState(0);

  function handleIncrement() {
    setCounter(counter => counter + 1);
  }
  function handleDecrement() {
    setCounter(counter => counter - 1);
  }
  
  return (
    <>
      <h2>{counter}</h2>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </>
  )
}