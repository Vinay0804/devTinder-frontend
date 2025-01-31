import React from 'react'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Body from './Body'
import Profile from './Profile'
import Login from './login'
import {Provider} from "react-redux";
import appStore from './utils/appStore'
import Feed from './Feed'


 const App = () => {
  return (
    <>
    <Provider store = {appStore}>
    <BrowserRouter basename='/'>
    <Routes>
      <Route path="/" element={<Body/>}>
      <Route path= "/" element={<Feed />} />
      <Route path= "/login" element={<Login />} />
      <Route path="/profile" element={<Profile />} />
      </Route>
    </Routes>
    </BrowserRouter>
    </Provider>
    </>
  )
}

export default App
