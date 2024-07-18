/* eslint-disable react/prop-types */
import { useState } from "react"


export default function SignInPage({isSignUp}){
  const [data, setData] = useState({
    userName: "",
    password: "",
    email: "",
  })

  async function signIn(){
    await fetch('http://localhost:3000/login', {
      method: 'POST', 
      body: JSON.stringify({
        userName: data.userName,
        password: data.password
      })
    });
  }
  async function signUp(){
    await fetch('http://localhost:3000/signup', {
      method: 'POST',
      body: JSON.stringify(data)
    })
  }

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

    {isSignUp && <>
    <label htmlFor="email">Email</label>
    <input 
      name="email"
      type="email"
      onChange={(e) => {setData({...data, email: e.target.value})}}
      value={data.email}
    /></>}
    <button onClick={() => {
      if (isSignUp){
        signUp()
      } else {
        signIn()
      }
    }}>Submit</button>
  </div>
}