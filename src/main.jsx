import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Login from './components/Login/Login'
import {BrowserRouter} from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'


ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId='765446709535-lma7ssu650qo79t0qnibbk5ieqv33327.apps.googleusercontent.com'>
  <React.StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    
  </React.StrictMode>
  </GoogleOAuthProvider>,
)
