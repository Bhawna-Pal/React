import './App.css'
import Login from "./Components/Login"
import Profile from "./Components/Profile"
import UserContextProvider from "./Context/ContextProvider"



function App() {


  return (
   
    < UserContextProvider>
      <h1>React With Chai</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
