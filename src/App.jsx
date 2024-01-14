import React from 'react'
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import Signup from './UserAuth/Signup'
import Login from './UserAuth/Login'
import Welcome from './LandingPage/Welcome';
import MainPage from './LandingPage/MainPage'
import Layout from './LandingPage/Layout';






const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Welcome/>}/>
      <Route path='/logs' element={<Login/>}/>
      <Route path='/sign-ups' element={<Signup/>}/>
      <Route element={<Layout/>}>
        <Route path='/maindash' element={<MainPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App