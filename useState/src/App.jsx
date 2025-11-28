import { useState } from "react"

export default function App() {
  const [text, setText] = useState('');
  
  return (
    <>
      <input onChange={(e) => setText(e.target.value)} type="text" value={text} placeholder="Enter your text" />
      <h1>{text}</h1>
    </>
  )
}