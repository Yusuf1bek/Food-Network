import { useState } from 'react'
import Header from "./components/Header.jsx"
import Hero from "./components/Hero.jsx"
import Features from "./components/Features.jsx"
import About from "./components/About.jsx"
import Menu from "./components/Menu.jsx"
import Takeway from "./components/Takeway.jsx"
import './App.css'

function App() {

  return (
    <>
      <div className='w-[1140px] py-[20px] m-auto'>
        <Header/>
        <Hero/>
        <Features/>
        <About/>
        <Menu/>
        <Takeway/>
      </div>
    </>
  )
}

export default App
