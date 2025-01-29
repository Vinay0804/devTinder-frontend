import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Body from './Body'
import Profile from './Profile'
import Login from './login'


 const App = () => {
  return (
    <>
   
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body/>}>
       <Route path= "/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
