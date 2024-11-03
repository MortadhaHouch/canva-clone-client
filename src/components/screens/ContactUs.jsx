import { useState } from "react"
import ImageURL from "../../assets/Call center-cuate.svg"
import Logo from "../../assets/pen-tool.png"
export default function ContactUs() {
    const [email,setEmail] = useState("");
    const [feedback,setFeedback] = useState("");
    async function handleSubmit(e){
        e.preventDefault();
    }
    return (
        <main className="w-100 h-100 d-flex flex-row justify-content-center align-items-center flex-wrap gap-2 p-2">
            <img src={ImageURL} alt="" style={{width:"clamp(300px,50%,600px)",height:"clamp(300px,50%,600px)"}}/>
            <form 
                style={{width:"clamp(350px,50%,450px)",height:"clamp(350px,50%,auto)",minHeight:500}}
                onSubmit={handleSubmit} 
                className="d-flex flex-column justify-content-center align-items-center gap-2 p-2 glass"
            >
                <img src={Logo} alt="" style={{borderRadius:"50%"}} width={100} height={100}/>
                <h2>Make a feedback</h2>
                <div>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" className="form-control"/>
                </div>
                <div>
                    <label htmlFor="feedback">feedback</label>
                    <textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} type="text" className="form-control" style={{resize:"none"}}></textarea>
                </div>
                <button className="btn btn-primary">send</button>
            </form>
        </main>
    )
}
