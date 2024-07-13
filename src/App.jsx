import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Login from './components/Login/Login'
import {Routes, Route} from "react-router-dom"
import UserDashboard from './components/Dashboard/EmployeeDashboard/UserDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard/AdminDashboard'

function App() {
  

  return (<>
    <Routes>
      <Route path='/login' element={<Login/>}></Route>
      <Route path='/user-dashboard' element={<UserDashboard/>}></Route>
      <Route path='/admin-dashboard' element={<AdminDashboard/>}></Route>
    </Routes>
  </>)
}

export default App
