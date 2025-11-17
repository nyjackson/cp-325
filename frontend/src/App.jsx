import { useState } from 'react'
import {Routes, Route} from'react-router'
import './App.css'

import NavBar from './components/NavBar/NavBar'
import Homepage from './components/Home/Homepage'
function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path = "/" element = {<Homepage/>}/>
      </Routes>
    </>
  )
}

export default App
