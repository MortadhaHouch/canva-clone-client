import { NavLink } from "react-router-dom";
import Logo from "../../assets/pen-tool.png"
import { useContext } from "react";
import { LoginContext } from "../../providers/loginProvider";
export default function Header() {
    const loginState = useContext(LoginContext);
    return (
        <header className="w-100 h-auto d-flex flex-row justify-content-between align-items-center gap-2 p-2 fixed-top">
            <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                <img src={Logo} alt="" style={{borderRadius:"50%"}} width={50} height={50}/>
                <h1>title</h1>
            </div>
            <div>
                <nav
                    className="navbar navbar-expand-sm navbar-light bg-transparent"
                >
                    <div className="container bg-transparent">
                        <button
                            className="navbar-toggler d-lg-none"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapsibleNavId"
                            aria-controls="collapsibleNavId"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="collapsibleNavId">
                            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                                {
                                    loginState.isLoggedIn||JSON.parse(localStorage.getItem("isLoggedIn"))?(
                                        <>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/editor">editor</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <NavLink className="nav-link" to="/dashboard">dashboard</NavLink>
                                            </li>
                                            <li className="nav-item">
                                                <button className="btn btn-danger">sign out</button>
                                            </li>
                                        </>
                                    ):(
                                        <>
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link" to="/login">login</NavLink>
                                            </li>
                                            <li className="nav-item dropdown">
                                                <NavLink className="nav-link" to="/signup">signup</NavLink>
                                            </li>
                                        </>
                                    )
                                }
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/about">about</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact-us">contact us</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                
            </div>
        </header>
    )
}
