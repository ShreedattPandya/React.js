import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  
  let myObj = {
    username: "Shreedatt",
    age: 21,
  }

  let myArr = [1,2,3,4,5]


  return (
    <>
      <h1 className="bg-yellow-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      
      <Card username="SHREEDATT"
          btnText="Team 1"
      //  channel="valueprops" 
      //  someObj = {myObj}  //as a varible can be passed for props value
      // someArr = {myArr}  //arrray as a variable value
       />

      <Card username="SURYA" btnText="Team 2" />
     </>
  )
}

export default App
