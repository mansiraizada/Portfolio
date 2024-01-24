import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'

const Project = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.to('.project', {
      // transform: 'translateX(-400vw)',
      x: '-300%',
      duration: 2,
      ease: 'power4.inOut',
      scrollTrigger: {
        trigger: '.main',
        scroller: 'body',
        pin: true,
        start: 'top 0%',
        end: 'top -100%',
        scrub: 5,
        markers: true
      }
    })
  })

  return (
    <div className='main bg-pink-300 w-full h-[100vh] md:h-[110vh] md:p-12 md:py-18'>
      <div className='text-white px-4'>
        <h1 className='font-bold text-4xl uppercase'>Projects</h1>
        <p className='py-2 tracking-tight'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit id obcaecati inventore impedit deserunt asperiores delectus non maxime sit esse!</p>
      </div>
      <div className='projectContainer w-full h-[93%] bg-yellow-300 flex gap-5 flex-nowrap'>
        <div className='shrink-0 project w-full h-[100%] bg-green-200'>

        </div>
        <div className='shrink-0 project w-full h-[100%] bg-green-200'>

        </div>
        <div className='shrink-0 project w-full h-[100%] bg-green-200'>

        </div>
        <div className='shrink-0 project w-full h-[100%] bg-green-200'>

        </div>
      </div>
    </div>
  )
}

export default Project
