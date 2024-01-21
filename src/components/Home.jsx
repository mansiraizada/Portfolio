import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
    var tl = gsap.timeline();

    useGSAP(() => {
        tl.from('.text h1', {
            delay: 1,
            y: 500,
            duration: 0.6,
            opacity: 0,
            stagger: 0.4,
        })
    })

    return (
      <div className='w-full h-[100vh] flex items-end'>
      <div className='text overflow-hidden p-1 w-full h-[92vh] flex flex-col justify-center items-center text-center font-bold'>
          <h1 className='text-5xl md:text-6xl'>Hi there! </h1> 
          <h1 className='text-5xl md:text-6xl mt-2'>I'm </h1>
          <h1 className='text-5xl md:text-8xl mt-4'>Mansi Raizada</h1>
          <h1 className='mt-[3vh] p-5 text-sm md:text-2xl'>I build pixel-perfect, accessible products for the web and beyond.</h1>
      </div>
      </div>
  )
}

export default Home