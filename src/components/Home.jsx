import React, { useEffect, useRef } from 'react'
import pdf from '../pdf/YogeshNewPdf.pdf'
import hero from './data/hero.json'
import Typed from 'typed.js'

const Home = () => {
  const typedRef=useRef(null)
  useEffect(()=>{
    const options={
      strings:["FullStack Developer","Web Developer","Software Developer"],
      typeSpeed:40,
      backSpeed:40,
      loop:true
    }
    const typed=new Typed(typedRef.current,options)
    return ()=>{
      typed.destroy()
    }
  },[])
  return (
    <>
      <div className="container home" id='home'>
        <div className="left">
          <h3 style={{border:'solid yellow 1px',fontSize:'medium',width:'200px',backgroundColor:'black',padding:'5px'}}>Welcome to My Portfolio</h3>
          <h1>Hi! i'm Yogesh
          </h1>
          <h1 ref={typedRef}>
          </h1>
          <a href={pdf} download="Resume.pdf" className="btn btn-outline-warning">Download Resume</a>
        </div>
        <div className="right">
            <div className="img">
           <img src={`/assets/${hero.imgSrc}`} alt="hero" />
           </div>
        </div>
      </div>
    </>
  )
}

export default Home
