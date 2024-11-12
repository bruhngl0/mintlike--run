'use client'

import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Portfolio = () => {

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const videoUrls = [
    'v1.mp4',
    'v2.mp4',
    
    // Add more video URLs as needed
  ];

  const titles = [
    'Real Estate',

    '3D VR Store',

  ]


  const description = [

    'orem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante vel justo lacinia convallis. Proin id elit at turpis vehicula fermentum. Nunc auctor, erat in commodo dapibus, libero eros bibendum orci, non dictum libero ex id tellus. Nulla facilisi. Phasellus sit amet justo eu arcu tincidunt tristique. Vivamus eu metus ac nunc eleifend malesuada' , 
    'lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac ante vel justo lacinia convallis. Proin id elit at turpis vehicula fermentum. Nunc auctor, erat in commodo dapibus, libero eros bibendum orci, non dictum libero ex id tellus. Nulla facilisi. Phasellus sit amet justo eu arcu tincidunt tristique. Vivamus eu metus ac nunc eleifend malesuada'
  ]


   
  const handleCarouselChange = (index) => {
    setCurrentVideoIndex(index);
  };

  return (
    <section id="portfolio" className="w-full px-36 " style={{ backgroundImage: `url('bg.png')` }}>
      <div className='px-8 pt-8' style={{ backgroundImage: `url('pur9.jpg')` }}>
        <div>
          <p className="text-black pb-12">OUR WORKS</p>
          <p className=" text-5xl">FEATURED PROJECTS</p>
        </div>

        <div className=' mt-10'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis totam doloremque nobis temporibus aliquam perferendis vel reprehenderit nostrum atque quae commodi necessitatibus, suscipit unde deleniti velit numquam vero veritatis. Voluptatum?</p>
        </div>


        <div className=' flex-col items-center justify-center mt-10 px-32 ' >
        <Carousel className=' flex-col items-center mr-11' onChange={handleCarouselChange}>
          {videoUrls.map((videoUrl, index) => (
            <div key={index} className="video-container">
              <video controls>
                <source src={videoUrl} type="video/mp4"/>
              </video>
            </div>
          ))}

        </Carousel>

        <div className=' pb-11'>{titles[currentVideoIndex]}</div>
        <div className=' pb-11'>{description[currentVideoIndex]}</div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;

