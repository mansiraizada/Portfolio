import React, {useState} from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  useGSAP(() => {
    gsap.from('.nav', {
      y:-100,
      opacity: 0,
      duration: 1,
    })
  })
  const navHandler = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <div className='nav w-full h-[8vh] fixed bg-[#949494] z-[9998]'>
      <div className='z-[9999] w-full h-full flex'>
          <div className='hidden w-[50vw] md:flex items-center py-4 px-10 gap-8 font-semibold'>
          <h3 className='hover:cursor-pointer hover:scale-[1.1] duration-100 ease-in'>Home</h3>
          <h3 className='hover:cursor-pointer hover:scale-[1.1] duration-100 ease-in'>About</h3>
          <h3 className='hover:cursor-pointer hover:scale-[1.1] duration-100 ease-in'>Skills</h3>
          <h3 className='hover:cursor-pointer hover:scale-[1.1] duration-100 ease-in'>Work</h3>
          <h3 className='hover:cursor-pointer hover:scale-[1.1] duration-100 ease-in'>Projects</h3>
          <h3 className='hover:cursor-pointer hover:scale-[1.1] duration-100 ease-in'>Contact</h3>
        </div>
        <div className='w-[50vw] flex md:hidden items-center px-4'>
          <CgMenuGridO className='text-3xl hover:cursor-pointer' onClick={navHandler}/>
        </div>
          <div className='w-[50vw] flex justify-end items-center gap-3 md:gap-5 px-4 md:px-2 md:mr-8'>
            <FaLinkedin className='text-2xl hover:cursor-pointer'/>
            <FaGithub className='text-2xl hover:cursor-pointer'/>
          </div>  
      </div>
      <div className={`bg-[#949494] px-3 py-4 md:hidden w-[50vw] h-fit absolute ${mobileNav ? 'left-[0]' : '-left-[60%]'} duration-500 ease-in`}>
          <div className='w-full h-full bottom-0 flex flex-col items-center justify-center'>
          <h3 className='hover:cursor-pointer p-1 hover:font-bold'>Home</h3>
          <h3 className='hover:cursor-pointer p-1 hover:font-bold'>About</h3>
          <h3 className='hover:cursor-pointer p-1 hover:font-bold'>Skills</h3>
          <h3 className='hover:cursor-pointer p-1 hover:font-bold'>Work</h3>
          <h3 className='hover:cursor-pointer p-1 hover:font-bold'>Projects</h3>
          <h3 className='hover:cursor-pointer p-1 hover:font-bold'>Contact</h3>
          </div>   
      </div>
    </div>
         
  )
}

export default Nav