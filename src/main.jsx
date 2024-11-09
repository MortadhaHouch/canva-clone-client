import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import {createBrowserRouter, createRoutesFromElements, Route,RouterProvider} from "react-router-dom"
import Home from './components/screens/Home.jsx';
import Login from './components/screens/Login.jsx';
import Signup from './components/screens/Signup.jsx';
import About from './components/screens/About.jsx';
import ContactUs from './components/screens/ContactUs.jsx';
import Dashboard from './components/screens/Dashboard.jsx';
// import Editor from './components/LayoutComponents/Editor.jsx';
import TlDrawEditor from './components/renderers/TlDrawEditor.jsx';
import Features from './components/screens/Features.jsx';
import Profile from './components/LayoutComponents/Profile.jsx';
import Projects from './components/screens/Projects.jsx';
import Notifications from './components/screens/Notifications.jsx';
import History from './components/screens/History.jsx';
import Community from './components/screens/Community.jsx';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route path="/features" element={<Features />} />
      <Route path="/home" element={<Home />} />
      <Route path="/editor" element={<TlDrawEditor />} />
      <Route path='community' element={<Community />}/>
      <Route path="/dashboard" element={<Dashboard />}>
        <Route path='profile' element={<Profile/>}/>
        <Route path='projects' element={<Projects/>}/>
        <Route path='activity-log' element={<History/>}/>
        <Route path='notifications' element={<Notifications/>}/>
      </Route>
      <Route path="/about" element={<About />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
