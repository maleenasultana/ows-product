import React from 'react'
import { useState } from 'react'
import {Routes,Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
// import Loading from './components/Loading'
import Feature from './components/Feature'
import About from './components/About'
import Deal from './components/Deal'
import HowToStart from "./components/HowToUse"
import Testimonial from "./components/Testimonial"
import Contact from './components/Contact'
import "./css/style.css"
// import NotFound from './components/NotFound'
import Footer from './components/Footer'
import ShopNow from './components/ShopNow'


function App() {
  const [loading, setLoading]= useState(true)
  return (
    <div>
     <Navbar/>
    <Routes>
    !loading  ? (
       <Route path="/" element={<Hero/>} />
       <Route path="/feature" element={<Feature/>} />
       <Route path="/about" element={<About/>} />
       <Route path="/" element={<Deal/>} />
       <Route path="/" element={<HowToStart/>} />
       <Route path="/products" element={<Products/>} />
       <Route path="/testimonial" element={<Testimonial/>} />
       <Route path="/contact" element={<Contact/>}/>
       <Route path="/" element={<Footer/>} />
       <Route path="/shopnow" element={<ShopNow/>} />
{/*       
      <NotFound/> */}

    ) : (
      {/* <Loading/>{setLoading(true)} */}
    
    )
   
    </Routes>
    
    </div>

  )
}

export default App