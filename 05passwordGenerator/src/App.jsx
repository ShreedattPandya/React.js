import { useState, useCallback, useEffect, useRef } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // useRef hook
  const passowordRef = useRef(null)

  // useCallback ultimately optimises code that runs many times through cache
  const passwordGenerator = useCallback(() => { //useCallback save fun in cache betn re-renders
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`" 

    for(let i = 1; i <= length; i++){
      let char = Math.floor(Math.random() * str.length + 1) //Output is the index number of string
      pass += str.charAt(char)
      // OR pass += str.[char]
    }
    setPassword(pass)
  }, [length, numberAllowed,charAllowed, setPassword]) 
      
  const copyPasswordToClipboard = useCallback(() => {
    passowordRef.current?.select(0,23) // its actually selected by we're not using it 
    window.navigator.clipboard.writeText(password)
    // passowordRef.current?.setSelectRange(0,23)
  }, [password])

  //useEffect makes calls fun if any change in dependencies
  useEffect(() => passwordGenerator(),[length,numberAllowed,charAllowed,setPassword] )

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700">
      <h1 className="text-white text-center my-3">Password Generator</h1>

      {/* Output Box where passoword is generated */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input   
        type="text" 
        value={password}
        className="outline-none w-full py-1 px-3" 
        placeholder='Slide the length for password'
        readOnly
        ref={passowordRef} //gives/takes value to useRef hook(Kind of agent everywhere providing values)
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>

        {/* Length Slider */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={4}
          max={24}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          id='lengthSlider'
          />
          <label htmlFor="lengthSlider">length:{length}</label>
        </div>

        {/* Number Checkbox */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={() => {setNumberAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Character Checked */}
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id="charInput" 
          onChange={() => {setCharAllowed((prev) => !prev)
          }}
          />
          <label htmlFor="charInput">Special Characters</label>
        </div>
      </div>
    </div>
    </> 
  )
}

export default App
