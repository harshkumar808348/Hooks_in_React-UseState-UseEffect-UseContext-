import React from 'react'
import { useState } from 'react'
const Signup = () => {
    const [name , setname] = useState("")
    const [password , setpassword] = useState("")
    const [email , setemail] = useState("")
  return (
    <>
    <input 
    type='text'
    placeholder='Enter Your Email'
    value={email}
    onChange={(e)=>setemail(e.target.value)}
    />
   <input 
   type='text'
   placeholder='Enter Your name '
   value={name}
   onChange={(e)=>setname(e.target.value)}
   />
  <input 
  type='text'
  placeholder='Enter Your Password'
  value={password}
  onChange={(e)=>setpassword(e.target.value)}
  />
  <button>Create for Register </button>
   </>
  )
}

export default Signup