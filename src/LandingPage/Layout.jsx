import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const Layout = () => {

  const User = []


  return (
 <>
 {User.length === 0 ? <Navigate to='/sign-ups'/> : <Outlet/>}
 </>
  )
}

export default Layout