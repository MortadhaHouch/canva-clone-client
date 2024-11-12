import {useContext, useEffect, useState} from "react";
import FileUpload from "./FileUpload.jsx";
import {ThemeContext} from "../../providers/themeProvider.jsx";
import fetchData from "../../../utils/fetchData.js";

export function CreatePost({posts,setPost}){
    const [content,setContent] = useState("");
    const [files,setFiles] = useState([]);
    const theme = useContext(ThemeContext);
    const [isLoading,setIsLoading] = useState(false);
    useEffect(() => {
        setFiles(files);
        return ()=> setFiles([])
    }, [files]);
    async function handleSubmit(e){
        e.preventDefault();
        try{
            const response = await fetchData("/post","POST",{content,files},setIsLoading);
            if(response.message && response.post){
                setPost((prev)=>[...prev,response.post]);
            }
        }catch (e) {
            console.log(e);
        }
    }
    return (
        <section
            className="d-flex flex-column justify-content-center align-items-center gap-2 w-100 h-100"
            style={{clipPath:"polygon(0 0, 100% 0, 100% 100%, 0 100%)"}}
        >
            <form
                onSubmit={handleSubmit}
                className="d-flex flex-column justify-content-center align-items-center gap-2"
                style={{
                    width:"clamp(300px,40%,600px)",
                    height:"clamp(300px,40%,600px)",
                    borderRadius:"10px",
                    boxShadow:"0px 0px 10px rgba(0,0,0,0.2)"
                }}
            >
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <textarea
                        onChange={(e)=>setContent(e.target.value)}
                        className="form-control w-100"
                        style={{
                            resize:"none",
                            width:"auto",
                            height:"300px",
                            borderRadius:"10px",
                            backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#003161":"#C5D3E8",
                            color:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#C5D3E8":"#003161",
                            border:"none",
                            padding:"20px",
                            fontSize:"20px",
                            lineHeight:"1.5",
                        }}
                        placeholder="What's on your mind?"
                    ></textarea>
                </div>
                <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                    <FileUpload setFiles={setFiles} multiple={true}/>
                    <div className="d-flex flex-row justify-content-center align-items-center gap-2 w-100 flex-wrap">
                        {
                            files && files.length > 0 && files.map((file,i)=>(
                                <div className="position-relative" key={i}>
                                    <button
                                        className="btn btn-close bg-danger position-absolute"
                                        style={{
                                            top:10,
                                            right:10
                                        }}
                                        onClick={()=>setFiles(files.filter((_,index)=>index!==i))}
                                    ></button>
                                    <img src={file} width={100} height={100} alt="file"/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="w-100">
                    <button className="btn btn-primary w-100" disabled={content.length === 0} type="submit">Submit</button>
                </div>
            </form>
        </section>
    )
}