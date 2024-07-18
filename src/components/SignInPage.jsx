/* eslint-disable react/prop-types */
import { useState } from "react"


export default function SignInPage({isSignUp}){
  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
  })
  return <div>
    <label htmlFor="userName">User Name</label>
    <input 
      name="userName" 
      type="text" 
      onChange={(e) => {setData({...data, userName: e.target.value})}}
      value={data.userName}
    />
    <label htmlFor="password">Password</label>
    <input 
      name="password" 
      type="password" 
      onChange={(e) => {setData({...data, password: e.target.value})}}
      value={data.password}
    />
    {isSignUp && <input 
      name="email"
      type="email"
      onChange={(e) => {setData({...data, email: e.target.value})}}
      value={data.email}
    />}
    <button type="submit">Submit</button>
  </div>
}