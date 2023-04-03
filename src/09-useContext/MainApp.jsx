import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import AboutPage from './AboutPage'
import HomePage from './HomePage'
import LoginPage from './LoginPage'
import NavBar from './NavBar'
import UserProvider from './context/UserProvider'

const MainApp = () => {
  return (
    <UserProvider>
      <NavBar/>   
      <hr/>

      <Routes>
          <Route path='/' element={ <HomePage/>}/>
          <Route path='/login' element={<LoginPage/>}/>
          <Route path='/about' element={<AboutPage/>}/>
          <Route path='/*' element={<Navigate to='/about'/>}/>
      </Routes>
    </UserProvider>
   
  )
}

export default MainApp
