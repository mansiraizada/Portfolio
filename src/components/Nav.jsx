import React, {useState} from 'react'
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  const navHandler = () => {
    setMobileNav(!mobileNav)
  }

  return (
    <>
      <div className='w-full h-[8vh] flex bg-[transparent]'>
          <div className='hidden w-[50vw] md:flex items-center py-4 px-8 gap-8'>
          <h3 className='hover:cursor-pointer'>Home</h3>
          <h3 className='hover:cursor-pointer'>About</h3>
          <h3 className='hover:cursor-pointer'>Skills</h3>
          <h3 className='hover:cursor-pointer'>Work</h3>
          <h3 className='hover:cursor-pointer'>Projects</h3>
          <h3 className='hover:cursor-pointer'>Contact</h3>
        </div>
        <div className='w-[50vw] flex md:hidden items-center px-4'>
          <CgMenuGridO className='text-2xl hover:cursor-pointer' onClick={navHandler}/>
        </div>
          <div className='w-[50vw] flex justify-end items-center gap-3 md:gap-5 px-4 md:px-0 md:mr-8'>
            <FaLinkedin className='text-2xl hover:cursor-pointer'/>
            <FaGithub className='text-2xl hover:cursor-pointer'/>
          </div>  
      </div>
      <div className={`md:hidden w-[50vw] h-[40vh] bg-blue-200 absolute ${mobileNav ? 'left-[0]' : '-left-[60%]'} duration-500 ease-in`}>
  {/* Your content goes here */}
</div>

      </>
         
  )
}

export default Nav