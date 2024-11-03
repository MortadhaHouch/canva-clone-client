/* eslint-disable no-unused-vars */
import './App.css'
import Footer from './components/LayoutComponents/Footer'
import Header from './components/LayoutComponents/Header'
import HomeLayout from './components/screens/HomeLayout'
import { LoginProvider } from './providers/loginProvider'
import { ThemeProvider } from './providers/themeProvider'
import {CookiesProvider} from "react-cookie"
function App() {
  return (
    <ThemeProvider>
      <CookiesProvider>
        <LoginProvider>
          <Header/>
          <HomeLayout/>
          <Footer/>
        </LoginProvider>
      </CookiesProvider>
    </ThemeProvider>
  )
}

export default App
