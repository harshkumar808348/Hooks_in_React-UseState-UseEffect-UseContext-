import { useState } from 'react'
import {BrowserRouter , Routes , Route, Router} from 'react-router-dom'
import Login from '../src/Login/Login.jsx'
import Signup from '../src/Login/Signup.jsx'
import { UserContext } from './Login/UserContext.jsx'
import Welcome from './Login/Welcome.jsx'
import UseReducer from './Login/UseReducer.jsx'
import './App.css'

function App() {
   const [user , setuser] = useState('')

  return (
    <UserContext.Provider value={{user , setuser}}>   
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/welcome' element={<Welcome/>}/>
      <Route path='/useReducer' element={<UseReducer/>}/>
     </Routes>
     </BrowserRouter>
    </UserContext.Provider>
    
  );  
}

export default App
