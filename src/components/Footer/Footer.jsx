import React from 'react'
import {  GrLinkedinOption} from 'react-icons/gr'
import { AiFillInstagram } from 'react-icons/ai'
import { AiFillTwitterSquare } from 'react-icons/ai'
import { BsTelephoneFill } from 'react-icons/bs'
import { AiOutlineMail  } from 'react-icons/ai'

const Footer = () => {
  return (
    <section id = "contact" className='  flex-col' style={{ backgroundImage: `url('pur.jpg')` }}>
    <div  className=' flex  items-center justify-center pt-6 space-x-5 '>
     <  GrLinkedinOption/>
     < AiFillInstagram />
     <  AiFillTwitterSquare />
    </div>

    <div className='flex  items-center justify-center pt-6'>
      


<a href="https://www.google.com/maps/search/?q=25/26+BMT+Complex,+Margosa+Road,+Malleshwaram,+Bangalore+560003" target="_blank" className='underline text-xl'>25/26 BMT Complex, Margosa Road, Malleshwaram, Bangalore 560003</a>
    </div>

    <div className='flex items-center justify-center pt-6'>
     < BsTelephoneFill /> 
     <h1 className='px-1 pr-7'> +91 8083333328</h1>

     < AiOutlineMail />
     <a href="mailto:info@mintlike.studio" className='px-1 pr-7 underline text-xl'>info@mintlike.studio</a>

    </div>

    <div className='   flex items-center justify-center pt-6'>
      <img src= "logofinal.png"  className=' h-14'/>
    </div>

    <div className='flex  pt-6 px-6'>
      <h1>Mintlike Studios, India.  </h1>
      <h1>©2023 All rights reserved </h1>
    </div>
   
   </section>
  )
}

export default Footer
