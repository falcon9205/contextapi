import React, { useContext, useState } from 'react'
import userContext from '../Context/UserContext'

const Login = () => {
    const [username,setusername] = useState(null)
    const [password,setpassword] = useState(null)
    const {setuser} = useContext(userContext)
    const handlesubmit = (e)=>{
       e.preventDefault()
       setuser({username,password})
    }
  return (
    <div>
      <h2> Login </h2>
      <input type="text" placeholder='username' 
      value={username}
      onChange={(e)=>setusername(e.target.value)}
      />
      <br/>
      <input type="text" placeholder='password'
      value={password}
      onChange={(e)=>setpassword(e.target.value)}/>
      <button onClick={handlesubmit}>Submit</button>
    </div>
  )
}

export default Login
