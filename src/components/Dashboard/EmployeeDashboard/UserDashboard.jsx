import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const UserDashboard = () => {
    const navigate = useNavigate()

    useEffect(() => {
        const token = localStorage.getItem('token')
        if(!token){
            navigate('/login')
            return;
        }
    
    })
      return (
        <div>
             <header>Quick Serve</header>
             <h2>BreakFast Menu</h2>
             <ul>
                <li>Idli</li>
                <li>Dosa</li>
             </ul>
             
        </div>
      )
}

export default UserDashboard
