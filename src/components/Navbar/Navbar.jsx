
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import log from 'public/logofinal.png'


const Navbar = () => {
  return (
   
   <>
   
  
   <div className= "flex space-x-8 py-3 justify-center  items-center font-bold  absolute top-0 left-0 w-full bg-transparent z-10  text-neutral-900 " >
   <img src = "logofinal.png" alt= "logo" href="/" className="  h-28 pr-[500px]"  />

   <div className= 'pl-20 space-x-7 pb-8' >
   
         <Link  href= "/" className = "py-4">HOME</Link>
         <Link  href= "/#about" className = "py-4">ABOUT</Link>
         <Link  href= "/#services" className = "py-4">SERVICES</Link>
         <Link  href= "/#portfolio" className = "py-4">PORTFOLIO</Link>
         <Link  href= "/#blog" className = "py-4">BLOG</Link>
         <Link  href= "/#contact" className = "py-4">CONTACT</Link>
          
    </div>
    
   </div>
   </>   
  )
    }


export default Navbar
