import { useState, useCallback } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setlength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = usestate(false);
  const [password, setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
     let pass = ""
     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

     if (numberAllowed) str += "1234567890"
     if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

     for (let i = 1; i <= array.length; i++) {
       let char = Math.floor(Math.random() * str.length + 1);
       pass = str.charAt(char)

     }

       setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  return (
    <>
     <div className='w-full max-w-md mx-auto'></div>
    </>
  )
}

export default App
