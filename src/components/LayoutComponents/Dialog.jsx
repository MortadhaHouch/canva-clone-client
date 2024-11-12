import FileUpload from "./FileUpload.jsx";
import {useContext, useState} from "react";
import {ThemeContext} from "../../providers/themeProvider.jsx";
import fetchData from "../../../utils/fetchData.js";
import {AiFillDislike, AiFillLike} from "react-icons/ai";
import Avatar from "../../../public/assets/Picture1.png";
import {FaComment} from "react-icons/fa";
export function Dialog({isShown,setIsShown,updateProfile,showData,data,item}){
    const [avatar,setAvatar] = useState("");
    const [firsName,setFirstName] = useState("")
    const [lastName,setLastName] = useState("")
    const [password,setPassword] = useState("")
    const theme = useContext(ThemeContext);
    async function handlleUpdateProfile(e){
        e.preventDefault();
        try{
            const response = await fetchData("/user/update",'PUT',{
                firstName:firsName.trim(),
                lastName:lastName.trim(),
                password:password.trim(),
                avatar:avatar
            });
            if(response.success_message){
                localStorage.setItem("firstName",response.firstName);
                localStorage.setItem("lastName",response.lastName);
                localStorage.setItem("avatar",response.avatar);
            }
            setIsShown(false);
            alert("Profile updated successfully");
        }catch(error){
            console.error(error);
            alert("Failed to update profile");
        }
    }
    return (
        <section className={`dialog-box ${isShown?"shown":"hidden"}`}>
            <div
                style={{
                    width:"clamp(300px,30%,450px)",
                    position:"relative",
                    backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2",
                    border:"2px solid rgba(255,255,255,.75)",
                    borderRadius:"5px",
                    padding:"20px",
                    boxShadow:"0 0 10px rgba(0,0,0,.2)"
                }}
            >
                <button
                    onClick={()=>setIsShown(false)}
                    className="btn btn-close bg-danger"
                    style={{position:"absolute",top:10,right:10}}
                ></button>
                {
                    updateProfile && (
                        <form onSubmit={handlleUpdateProfile}
                              className="d-flex flex-column justify-content-center align-items-center gap-2">
                            <div className="w-100">
                                <label htmlFor="firstName">first name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firsName}
                                    onChange={(e) => setFirstName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="w-100">
                                <label htmlFor="lastName">last name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={(e) => setLastName(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="w-100">
                                <label htmlFor="password">password</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                />
                            </div>
                            <div className="w-100 d-flex flex-row justify-content-center align-items-center gap-2">
                                <FileUpload setAvatar={setAvatar}/>
                                {
                                    avatar && <img src={avatar} alt="avatar" className="avatar" width={100} height={100}/>
                                }
                            </div>
                            <div className="w-100">
                                <button
                                    type="submit"
                                    disabled={firsName.length === 0 || lastName.length === 0 || password.length === 0}
                                    className="btn btn-primary w-100">
                                    update profile
                                </button>
                            </div>
                        </form>
                    )
                }
                {
                    showData && data && (
                        <div className="d-flex flex-column justify-content-center align-items-center gap-2 p-2">
                            <div className="feedback-header">
                                <img src={Avatar} alt="image" width={70} height={70}/>
                                <h3 className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>{item.author.email}</h3>
                                <h5 className={`${theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"text-light":"text-dark"}`}>{item.author.name}</h5>
                            </div>
                            <div className='w-100 d-flex flex-row justify-content-evenly align-items-center gap-2'>
                                <p>{item.content}</p>
                            </div>
                            <div className='w-100 d-flex flex-row justify-content-evenly align-items-center gap-2'>
                                <button
                                    className="btn btn-outline-light w-100"
                                >
                                    <AiFillLike />
                                    <span>{item.likes}</span>
                                </button>
                                <button
                                    className="btn btn-outline-light w-100"
                                >
                                    <AiFillDislike/>
                                    <span>{item.dislikes}</span>
                                </button>
                                <button
                                    className="btn btn-outline-light w-100"
                                >
                                    <FaComment size={20}/>
                                    <span>{item.comments}</span>
                                </button>
                            </div>
                        {
                            data.map((i,index)=>{
                               return (
                                   <div key={index} className="d-flex flex-column gap-2">
                                       <div>
                                           <img src={i.user.avatar} alt="avatar" className="avatar" width={100} height={100}/>
                                           <h4>{i.user.email}</h4>
                                           <h5>{i.user.firstName} {i.user.lastName}</h5>
                                       </div>
                                       <div>
                                           <p>{i.content}</p>
                                       </div>
                                       <div>
                                           <button className="btn btn-primary"><AiFillLike/></button>
                                           <button className="btn btn-primary"><AiFillDislike/></button>
                                       </div>
                                   </div>
                               )
                            })
                        }
                        </div>
                    )
                }
            </div>
        </section>
    )
}