import {useContext, useState} from "react"
import { ThemeContext } from "../../providers/themeProvider"
import { FiEdit2 } from "react-icons/fi";
import {Dialog} from "./Dialog.jsx";
export default function Profile() {
    const theme = useContext(ThemeContext);
    const [isShown, setIsShown] = useState(false)
    return (
        <main
            style={{
                backgroundColor:theme.isDark||JSON.parse(localStorage.getItem("isDark"))?"#133E87":"#E5D9F2"
            }}
            className="w-100 min-vh-100 d-flex flex-column justify-content-start align-items-center flex-wrap gap-2 p-4"
        >
            <section
                className={`d-flex flex-column justify-content-start align-items-center gap-3 ${theme.isDark || JSON.parse(localStorage.getItem('isDark')) ? 'text-light' : 'text-dark'}`}>
                <div className="position-relative">
                    <FiEdit2 size={25} style={{position: "absolute", bottom: 0, right: -10}}
                             stroke={theme.isDark || JSON.parse(localStorage.getItem("isDark")) ? "white" : "black"}

                             onClick={() => setIsShown(true)}/>
                    <img src={localStorage.getItem("avatar")} width={100} height={100} style={{borderRadius: "50%", cursor: "pointer"}} alt=""/>
                </div>
                <h2>{localStorage.getItem("email")}</h2>
                <h3>{localStorage.getItem("firstName")} {localStorage.getItem("lastName")}</h3>
                <Dialog isShown={isShown} setIsShown={setIsShown} updateProfile={true} item={null} data={null} showData={null}/>
            </section>
        </main>
    )
}
