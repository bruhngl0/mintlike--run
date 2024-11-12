
import React from 'react'
import Image from 'next/image'
import about from "public/about1.png"

const About = () => {
  return (
    <section id= "about" className="flex w-full " style = {{ backgroundImage: `url('bg.png') `}}>
    <div className="mx-36 flex transform   bg-opacity-60 hover:scale-105 transition duration-300 hover:bg-opacity-100 pr-6 " style={{ backgroundImage: `url('pur5.jpg')` }}>
     <div className="w-1/2 p-8  ">
       <Image src = {about} alt='ll' className= "opacity- z-30 w-auto h-auto"/>
     </div>
     <div className=" w-1/2  px-6  ">
       <p className="pt-24 pb-11 text-2xl" >ABOUT US</p>
       <p className="pb-11 text-3xl">Bringing Imagination to Life: Where Reality Meets the Future.</p>
       <p className=" pt-8">At Mintlike Studios, our mission is crystal clear: we're determined to redefine the marketing landscape through the immersive power of Augmented Reality (AR) and Virtual Reality (VR). Our unwavering dedication drives us to transform the way brands connect with their audiences, consistently pushing the boundaries of creativity and fully unleashing the potential of AR/VR technologies. Join us in this transformative journey into a new era of experiential marketing, where limitless possibilities come to life.</p>
      
    
     </div>
     </div>
 </section>
  )
}

export default About
