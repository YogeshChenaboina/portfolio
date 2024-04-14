import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import About from './components/About'

const App = () => {
  return (
    <>
     <Navbar/> 
     <div className="container">
     <Home/>
     <Skills/>
     <Projects/>
     <Contact/>
     </div>
    </>
  )
}

export default App
