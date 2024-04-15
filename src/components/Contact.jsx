import React from 'react'
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  return (
    <>
     <div className="container contact" id='contact'>
      <h1>Contact Me</h1>
      <div className="contact-icon"
      data-aos="zoom-in-up"
      data-aos-duration="1000"
      >
        <a href='https://www.linkedin.com/in/yogesh-chennaboina-b26391225/' target="_blank" className="items"><AiFillLinkedin className='icons'/></a>
        <a href='https://github.com/YogeshChenaboina' target="_blank" className="items"><AiFillGithub   className='icons'/></a>
        <a href='' target="_blank" className="items"><BsTwitterX     className='icons'/></a>
        <a href='mailto:yogeshchennaboina@gmail.com' target="_blank" className="items"><AiOutlineMail  className='icons'/></a>
      </div>
      </div> 
    </>
  )
}

export default Contact
