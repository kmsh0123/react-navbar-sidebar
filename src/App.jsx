import React from 'react'
import './App.css'
import Navbar from './Navbar'
import { Route, Routes } from 'react-router-dom'
import Contacts from './pages/Contacts'
import Frequents from './pages/Frequents'
import Other from './pages/Other'
import MobileCreate from './components/MobileCreate'


const App = () => {
  return (
    <div className=''>
     <Navbar/>
      <Routes>
        <Route path="/" element={<Contacts/>} />
        <Route path="/frequents" element={<Frequents/>} />
        <Route path="/other" element={<Other/>} />
      </Routes>
      <MobileCreate/>
    </div>
   
  )
}

export default App