import React from 'react'
import { Outlet, Navigate, } from 'react-router'


const ProtectedRoutes = ({signedIn}) => {
    const user = signedIn
    return user ? <Outlet/> : <Navigate to="/signup"/>

   

}

export default ProtectedRoutes
/*<div>
    <div className='Link'>
    <Link  to='/Signup'>
    Sign Up
    </Link>
  <div className='Link'>
    <Link  to='/Login'>
  Login
  </Link>
  </div>
  <div className='Link'>
    <Link  to='/Home'>
  Home
  </Link>
  </div>
    </div>
   </div>*/