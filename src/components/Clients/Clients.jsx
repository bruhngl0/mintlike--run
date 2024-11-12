import React from 'react'

const Clients = () => {
  return (
    <section id= "portfolio" className=" w-full py-20 px-36" style = {{ backgroundImage: `url('bg.png') `}}>
    <div className=' items-center justify-center'>
      <p className= " text-purple-900 text-5xl pb-6" >We Love Our Clients</p>
      <p className='text-black py-6 text-3xl'>Our clients come first at fifteen, and we are proud to work with some of the worlds best brands</p>
      <p className='text-black pb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod libero modi laborum? Quaerat ducimus nobis doloremque atque perspiciatis quia, adipisci corrupti tempore est saepe quas magni nesciunt nisi, et aut.</p>   
    </div>  
    

    <section className='flex '>
    <div className=' flex-col text-black  border-r-2  border-r-purple-900  bg-slate-50 w-1/4 z-30'>
        <div className='  text-black  border-b-2 border-b-purple-900 h-48 flex items-center justify-center '>
         <img src='pm.png' className='  h-24  transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
        <div className='  text-black   border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
      </div>

      <div className=' flex-col text-black  border-r-2  border-r-purple-900  bg-slate-50 w-1/4 z-30'>
        <div className='  text-black  border-b-2 border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
        <div className='  text-black   border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
      </div>


      <div className=' flex-col text-black  border-r-2  border-r-purple-900  bg-slate-50 w-1/4 z-30'>
        <div className='  text-black  border-b-2 border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
        <div className='  text-black   border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
      </div>


      <div className=' flex-col text-black  bg-slate-50 w-1/4 z-30'>
        <div className='  text-black  border-b-2 border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
        <div className='  text-black   border-b-purple-900 h-48 flex items-center justify-center'>
         <img src='pm.png' className='  h-24 transform hover:scale-125 transition duration-300 hover:opacity-100' /> 
        </div>
      </div>
      
    </section>
    </section> )
}

export default Clients
