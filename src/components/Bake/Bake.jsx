'use client'

import React from 'react'
import { PiArrowSquareUpLeft } from 'react-icons/pi';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import YouTube from 'react-youtube';
import Image from 'next/image';
import ghar from 'public/ghar.png'
import render1 from 'public/ren1.jpg'
import render2 from 'public/ren2.jpg'
import render3 from 'public/ren3.jpg'
import render4 from 'public/ren4.jpg'
import render5 from 'public/ren5.jpg'
import render6 from 'public/ren6.jpg'

const Bake = () => {


  return (

    <section id= "portfolio" className= "w-full px-36 " style={{ backgroundImage: `url('bg.png')` }}>

     <div className=' flex-col'>
          <p className="text-black pb-12 pt-12">OUR WORKS</p>
          <p className=" text-5xl text-purple-800">FEATURED PROJECTS</p>
     </div>


     <Carousel showArrows={false} infiniteLoop={true} autoPlay={true} interval={3000} showThumbs = {false} >
       <div className=' flex items-center justify-center  h-screen ' >
   
       <div>
         <div className=' p-7 text-purple-800  flex-col border-b-4'>
          <p className=' text-xl text-black pb-4 font-bold'>3D Render</p>
          <p>Mintlike Studios offers a cutting-edge 3D visualization service that transforms products and spaces into stunning images. With the added bonus of AR, you can explore and interact with your creations like never before. </p>
       </div>


       <div className=' p-7 pt-32  text-purple-800 border-b-4'>
       <p className=' text-xl text-black pb-4 font-bold'>Product Visualization</p>
         Present products with high-fidelity 3D models. Shorten sales cycles by enabling customers to visualize and personalize your product models in realistic home scenes.
       </div>
       </div>

       <div>    
        <Image src = {ghar} className=''/>
       </div>

     <div>
     <div className=' p-7 text-purple-800  flex-col items-start justify-start border-b-4'>
        <p className=' text-xl text-black pb-4 font-bold'>Browser Walkthrough</p>
        <p>Elevate your designs with captivating interactive browser-based free-roam walkthroughs. Utilize webGL to accentuate distinctive features and deliver an immersive experience. </p>
    </div>
     <div className=' p-7 pt-32  text-purple-800 border-b-4'>
     <p className=' text-xl text-black pb-4 font-bold'>AR/VR Solutions </p>
     Step into a new dimension with our AR/VR services. Immerse yourself in interactive, real-time virtual environments that transport you to extraordinary worlds, all powered by cutting-edge technology.
    </div>
    </div>
    </div>

    <div className=" flex pt-32">
      <div className='w-1/2 mr-3'>
      <YouTube videoId="7v93AKbgEPY" className='  ' />
      
      <p className=' text-black pt-6 border-t-4 flex justify-start items-start'></p>
      </div>
      <div className='w-1/2 '>
      <YouTube videoId="1aEQlUYc7Iw?si=89qbEKLL4gqvd16_" className=' ' />
      <p className=' text-black  pt-6 border-t-4'></p>
      </div>
    </div>

    <div className=' pt-12 flex'>
      <Image src= {render5} className=' m-3' />
      <Image src= {render6} className=' m-3' />
    </div>

    <div className=' pt-12 flex'>
      <Image src= {render2} className=' m-3' />
      <Image src= {render3} className=' m-3' />
    </div>

    <div className=' pt-12 flex'>
     <Image src= {render4} className=' m-3' />
      <Image src= {render1} className=' m-3' />
    </div>

    </Carousel>
    </section>
  )
}

export default Bake
