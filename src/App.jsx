import { useState } from 'react'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import About from "./components/About.jsx"
import Menu from "./components/Menu.jsx"
import Takeway from "./components/Takeway.jsx"
import Testominal from './components/Testominal.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {

  return (
    <>
      <div className='w-[1140px] py-[20px] m-auto'>
        <Header/>
        <Hero/>
        <Features/>
        <About/>
        <Menu/>
      </div>
        <div className='takeway-section '>
          <Takeway/>
        </div>
        <div className='w-[1140px] py-[20px] m-auto'>
          <Testominal/>
        </div>
        <div className='bg-[#FCF2E7] '>
          <Contact/>
        </div>
        <div className='bg-[#252525]'>
          <Footer/>
        </div>
      <ToastContainer/>
    </>
  )
}

export default App
