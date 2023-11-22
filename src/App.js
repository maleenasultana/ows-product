import React from 'react'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import Feature from './components/Feature'
import About from './components/About'
import Testimonial from "./components/Testimonial"
import "./css/style.css"
import "../src/css/bootstrap.min.css"




function App() {
  const [loading, setLoading]= useState(true)
  return (
    <div>
     <Navbar/>
    <Routes>
       <Route path="/" element={<Hero/>} />
       <Route path="/feature" element={<Feature/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/testimonial" element={<Testimonial/>} />
       <Route path="/" element={<Footer/>} />

   
    </Routes>
    
    </div>

  )
}

export default App