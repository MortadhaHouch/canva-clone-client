import { useState } from "react"
import LoginImage from "../../assets/Login-amico.svg"
import Logo from "../../assets/pen-tool.png"
export default function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    async function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <main className="w-100 h-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 p-2">
            <img src={LoginImage} alt="" style={{width:"clamp(300px,50%,600px)",height:"clamp(300px,50%,600px)"}}/>
            <form 
                onSubmit={handleSubmit} 
                className="d-flex flex-column justify-content-center align-items-center gap-2 p-2 glass"
                style={{width:"clamp(350px,50%,450px)",height:"clamp(350px,50%,auto)"}}
            >
                <img src={Logo} alt="" style={{borderRadius:"50%"}} width={100} height={100}/>
                <h2>login</h2>
                <div>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" name="password" id="password" className="form-control"/>
                </div>
                <button disabled={email.length === 0 && password.length === 0} className="btn btn-primary">login</button>
            </form>
        </main>
    )
}
