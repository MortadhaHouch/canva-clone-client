import { useState } from "react";
import fetchData from "../../../utils/fetchData.js";
import {useCookies} from "react-cookie"
import sign from "jwt-encode";
import SignUpImage from "../../assets/Sign up-bro.svg"
import Logo from "../../assets/pen-tool.png"
export default function Signup() {
  const [email,setEmail] = useState("");
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [password,setPassword] = useState("");
  const [cookies,setCookie] = useCookies(["auth_token"])
  async function handleSubmit(e){
    e.preventDefault();
    try {
      const response = await fetchData("/user/signup","POST",{
        email,
        password,
        firstName,
        lastName
      })
      if(response.isVerified){
        setCookie("auth_token",response.token,sign(
          {
            path: "/",
            maxAge:60*60*24*7
          },import.meta.env.VITE_SECRET_KEY
        ))
        window.location.href = "/dashboard"
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <main className="w-100 h-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 p-2">
      <img src={SignUpImage} alt="" style={{width:"clamp(300px,50%,600px)",height:"clamp(300px,50%,600px)"}}/>
      <form 
        onSubmit={handleSubmit} 
        className="d-flex flex-column justify-content-center align-items-center gap-2 p-2 glass"
        style={{width:"clamp(350px,50%,450px)",height:"clamp(350px,50%,auto)"}}
      >
        <img src={Logo} alt="" style={{width:100,height:100}}/>
        <h2>sign up</h2>
        <div>
          <label htmlFor="firstName">firstName</label>
          <input value={firstName} onChange={(e) => setFirstName(e.target.value)} type="text" name="firstName" id="firstName" className="form-control"/>
        </div>
        <div>
          <label htmlFor="lastName">lastName</label>
          <input value={lastName} onChange={(e) => setLastName(e.target.value)} type="password" name="lastName" id="lastName" className="form-control"/>
        </div>
        <div>
          <label htmlFor="email">email</label>
          <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control"/>
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control"/>
        </div>
        <button className="btn btn-primary">sign up</button>
      </form>
    </main>
  )
}
