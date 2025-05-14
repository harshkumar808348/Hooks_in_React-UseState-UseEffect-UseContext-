import React from 'react'
import { useState , useEffect } from 'react'
import { UserContext } from './UserContext.jsx'

const Login = () => {
    const {setuser} = React.useContext(UserContext)
    const [password , setpassword] = useState("")

    useEffect(()=>{
       const savedName = localStorage.getItem('name')
       if(savedName){
        setname(savedName)  
       }
    },[name])
  return (
    <>

   <input 
   type='text'
   placeholder='Enter Your name '
   onChange={(e)=>setuser(e.target.value)}
   />
  <input 
  type='text'
  placeholder='Enter Your Password'
  value={password}
  onChange={(e)=>setpassword(e.target.value)}
  />
  <button>Click for Login</button>
   </>
  )
}

export default Login