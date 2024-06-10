import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks: updates UI elements all over the project in once
  // const [initial variable, method that updates variable] = useState(0)

  let [counter, setCount] = useState(0)
 
  const addValue = () => {
    setCount(counter + 1) 
  }

  const removeValue = () => {
    if(counter > 0){  //No negative number is allowed in counter
    setCount(counter - 1)
    }
  }

  return (
    <>
    
      <h1>COUNTING MACHINE</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={addValue}>Add Value: {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value: {counter}</button>
    </>
  )
}

export default App
