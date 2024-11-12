import React from 'react'
import Image from 'next/image'
import blog1 from 'public/try1.jpg'
import blog2 from 'public/itt.jpeg'
import blog3 from 'public/blog1.jpg'
import blog4 from 'public/blog3.jpg'

const Blogs = () => {
  return (
    <section id= "blog" className=" w-full  px-36 z-40 " style = {{ backgroundImage: `url('bg.png') `}}>
    <div>
      <p className=" text-black  pb-12 text-2xl">BLOGS</p>
      <p className= " text-purple-900 text-5xl pb-8" > Latest News and Articles</p>
    </div>  

    <div className='flex '>

    <a href = "https://www.cnet.com/tech/gaming/best-vr-headset/ ">
      <div className='  flex items-center justify-center transform hover:scale-105 transition duration-300 hover:opacity-100 '>
        <Image src = {blog1} className=' py-14 px-6' /> 
        <p className=' px-36 absolute  top-3/4 text-xl font-bold underline'> Our top picks for VR headsets this year, including thoughts on the Meta Quest 3 and Quest 2, Sony PSVR 2 and more, all tested or demoed by CNET.</p>
       
      </div>
     </a>

      <div className=' w-1/2  py-14  text-black pr-5 ' >
        
        <a href = "https://www.indiatoday.in/technology/news/story/reliance-unveils-jioglass-with-ar-and-vr-modes-what-is-it-how-to-get-it-and-more-2455727-2023-10-30">
        <div className=' h-1/3 border-2 p-6  flex bg-white border-b-2  transform hover:scale-105 transition duration-300 hover:opacity-100'>
            <Image src = {blog2} />  
            <div className=' flex-col items-center justify-center'>
            <p className=' px-6 pb-6 font-bold'>Reliance unveils JioGlass with AR and VR modes.</p>
            <p className=' px-6'>AR shopping, including features like 3D virtual try-ons.</p>
            <p className='px-6  pt-6 underline'> Read full article </p>
            </div>
        </div>
        </a>
        

        <a href = "https://arinsider.co/2023/11/01/when-will-ar-shopping-be-a-mass-market-reality/">
        <div className=' h-1/3  border-2 p-6 flex bg-white border-b-2 transform hover:scale-105 transition duration-300 hover:opacity-100'>
            <Image src = {blog3} className='  ' />
            <div className=' flex-col items-center justify-center'>
            <p className=' px-6 pb-6 font-bold'>When Will AR Shopping Be a Mass-Market Reality?</p>
            <p className=' px-6'>Picture yourself donning a pair of glasses.</p>
            <p className='px-6  pt-6 underline'> Read full article </p>
            </div>
        </div>
        </a>
        

        <a href = "https://www.theverge.com/2023/11/2/23942639/htc-vive-focus-3-nasa-crew-7-virtual-reality-behavioral-health-test">
        <div className=' h-1/3  border-2 p-6 flex bg-white border-b-2 transform hover:scale-105 transition duration-300 hover:opacity-100'>
            <Image src = {blog4} />
            <div className=' flex-col items-center justify-center'>
            <p className=' px-6 pb-6 font-bold'>HTC’s Vive Focus 3 has a new, far-out mission</p>
            <p className=' px-6'>HTC has collaborated with XRHealth, a virtual reality therapy company.</p>
            <p className='px-6  pt-6 underline'> Read full article </p>
            </div>
        </div>
        </a>
        
      </div>
    </div>
     
    </section>
  )
}

export default Blogs
