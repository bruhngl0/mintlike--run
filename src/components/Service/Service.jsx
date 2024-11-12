import React from 'react'
import { TbAugmentedReality } from 'react-icons/tb'
import { PiVirtualReality } from 'react-icons/pi'
import  { TbBrandThreejs } from 'react-icons/tb'
import { CgWebsite } from 'react-icons/cg'
import { BiLogoBlender } from 'react-icons/bi'

const Service = () => {
  return (
   
    <section id= "services" className=" w-full py-12 px-36  my-20" style = {{ backgroundImage: `url('bg.png')`}}>
   
     <div>
      <p className=" text-black pb-8 text-2xl">Our Services</p>
     <p className=" text-purple-900 pb-8 text-5xl ">Immersive Experiences</p>
     <p className=" text-black pb-8">Elevate your digital presence with our Augmented Reality (AR), Virtual Reality (VR), Interactive ArchViz, and 3D Visuals services. Our team specializes in creating captivating experiences that seamlessly blend the boundaries between the real and virtual worlds. Explore new dimensions of creativity and innovation with us.</p>
     </div>

     <div className="flex  space-x-10">
      <div className=" bg-purple-900 bg-opacity-90 w-80 px-8 py-8 opacity-90 z-50 transform hover:scale-105 transition duration-300 hover:opacity-100 hover:bg-purple-800">
        <TbAugmentedReality className='w-16 h-28 pb-6' /> 
        <p className="pb-6 text-xl font-semibold">AR Odyssey</p>
        <p>Our immersive AR solutions redefine how users interact with reality, turning everyday moments into extraordinary adventures. Experience the future today.</p>
      </div>
      <div className=" bg-purple-900  bg-opacity-90 w-80 px-8 py-8 opacity-90 z-50 transform hover:scale-105 transition duration-300 hover:opacity-100 hover:bg-purple-800">
        < PiVirtualReality className='w-16 h-28 pb-6' /> 
        <p className="pb-6 text-xl font-semibold">VR Visions </p>
        <p> VR Visions offer immersive adventures that defy the boundaries of reality. Journey to  realms and discover boundless possibilities beyond imagination.</p>
      </div>
      <div className=" bg-purple-900 w-80 bg-opacity-90 px-8 py-8 opacity-90 z-50 transform hover:scale-105 transition duration-300 hover:opacity-100 hover:bg-purple-800">
        <TbBrandThreejs className='w-16 h-28 pb-6' /> 
        <p className="pb-6 text-xl font-semibold">Interactive Archviz</p>
        <p> Walk through your dream spaces, interact with designs, and make informed decisions in a dynamic 3D environment. Experience architecture like never before.</p>
      </div>
      <div className=" bg-purple-900 w-80 bg-opacity-90 px-8 py-8 opacity-90 z-50 transform hover:scale-105 transition duration-300 hover:opacity-100 hover:bg-purple-800">
        <BiLogoBlender className='w-16 h-28 pb-6' /> 
        <p className="pb-6 text-xl font-semibold">3D Visualization</p>
        <p>Unlock the art of 3D Visualization. We bring ideas to life, crafting captivating visual narratives and dynamic showcases.</p>
      </div>
     </div>
     
    </section>
  )
}

export default Service
