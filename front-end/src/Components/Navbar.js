import React from 'react'
import NavConnected from './navConnected'
import NavNoConnected from './navNoConnected'
import { useAuth } from '../AuthContext'

function Navbar() {
    const {isAuthenticated,setIsAuthenticated}=useAuth()
  return (
    <div>
        {isAuthenticated ? <NavConnected setIsAuthenticated={setIsAuthenticated}/> : <NavNoConnected />}
    </div>
  )
}

export default Navbar