import React from 'react'

const Hero = () => {
  return (
    
       <div className="flex w-full h-screen" style = {{ backgroundImage: `url('bg.png')`}}>
        <div className=" w-1/2 ">
          <h1 className="flex items-center justify-center   mt-72 font-medium text-5xl  px-36  text-neutral-800 ">Unleash the Magic of Mixed Reality: Your World, Reimagined. </h1>
          <p className=" text-neutral-800 px-36 mt-10 text-xl">
          Mintlike Studios is dedicated to pushing the envelope in marketing, utilizing AR/VR to create groundbreaking experiences.</p>
        </div>
        <div className= "w-1/2   p-8 flex items-center justify-center"  >
          <img src= "webone1.png" className=" w-full"/>
        </div>
      </div>
    
  )
}

export default Hero
