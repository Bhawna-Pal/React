import { useState, useCallback, useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useref hook
   const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if (numberAllowed) str += "1234567890"
     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

     for (let i = 1; i <= length; i++) {
       let char = Math.floor(Math.random() * str.length + 1);
       pass += str.charAt(char)

     }

       setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

      const copyPasswordToClipboard = useCallback(() => {
        passwordRef.current?.select()
        passwordRef.current?.setSelectionRange(0, 20)
        window.navigator.clipboard.writeText(password)
      }, [password])

   useEffect(() => {
    passwordGenerator()
   }, [length, numberAllowed, charAllowed, passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className='className="flex shadow rounded-lg overflow-hidden mb-4"'>
        <input 
        type="text" 
        value={password}
        className='outline-none w-80 flex-grow py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard} 
        className='outline-none bg-blue-700  active:bg-blue-900 text-white px-4 py-1 shrink-0 rounded shadow-md transition-transform duration-150 ease-in-out transform hover:scale-105 active:scale-95 cursor-pointer'>copy</button>
      </div>
      <div className='flex text-base gap-x-2 py-6 '>
        <div className='flex items-center gap-x-2'>
          <input 
          type="range" 
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}
          />
          <label>Length : {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
            setNumberAllowed((prev) => !prev);
          }} 
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={() => {
            setCharAllowed((prev) => !prev);   
          }} 
          />
          <label htmlFor="characterInput">Characters
          </label>
        </div>
      </div>
     </div>
    </>
  )
}

export default App
