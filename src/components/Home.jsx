import React, {useEffect, useRef} from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Home = () => {
    var tl = gsap.timeline();

    useGSAP(() => {
        tl.from('.text h1', {
            y: 500,
            duration: 1,
            opacity: 0,
            stagger: 0.5,
        })
    })

  return (
      <div className='text overflow-hidden bg-red-300 p-1 w-full h-[92vh] flex flex-col justify-center items-center text-center font-bold'>
          <h1 className='text-5xl md:text-7xl leading-[8vh]'>Hi there! <br/> I'm <br/> Mansi Raizada</h1>
          <h1 className='mt-[3vh] p-5 text-sm md:text-2xl'>I build pixel-perfect, accessible products for the web and beyond.</h1>
      </div>
  )
}

export default Home