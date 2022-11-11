import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Header from './component/Header'
import Contact from './component/Contact'
import Gform from './component/Gform'
function Routers() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/about' element={<About />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/form' element={<Gform />}/>
        </Routes>
    </div>
  )
}

export default Routers
