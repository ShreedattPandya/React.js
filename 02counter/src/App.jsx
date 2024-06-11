import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //hooks: updates UI elements all over the project in once
  // const [initial variable, method that updates variable] = useState(0)

  const [counter, setCounter] = useState(0)
 
  const addValue = () => {
    setCounter(counter + 1) 

    //SetCounter Method Attribute(prevCounter): 

    // setCount(counter + 1) 
    // setCount(counter + 1) 
    // Repetion won't work since useState sends updates to UI/variables in batches.Batches ignores repetition through fibre algo 

    //hence prevCounter: stores the recent value of setter method's variable. It's attribute of setter method
    // setCounter((prevCounter) => prevCounter + 1)
    //or
    // setCounter((counter => counter + 1)) //Attribute name may vary

  }

  const removeValue = () => {
    if(counter > 0){  //No negative number is allowed in counter
    setCounter(counter - 1)
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
