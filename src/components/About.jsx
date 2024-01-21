import React from 'react'

const About = () => {
  return (
      <div className=' w-full h-[100vh] p-4 flex flex-col md:flex-row gap-10 items-center'>
          <div className='w-full h-fit md:h-[80%] md:p-10 md:py-16 md:text-xl'>
          I'm currently an Engineer at <b>Tata Consultancy Services</b>,
          building things for the web with some awesome people.<br/><br/>
          I graduated from <b>Pranveer Singh Institute of Technology</b>.<br/><br/>
          As a software engineer, I enjoy bridging the gap between
          engineering and design — combining my technical knowledge
          with my keen eye for design to create a beautiful product.<br/><br/>
          My goal is to always build web applications that are scalable
          and efficient under the hood while providing engaging,
          pixel-perfect user experiences.
          </div>   
          <div className='w-full h-[20vh] md:h-[80%] flex items-center justify-center'>
              <iframe className='w-full md:w-[80%] h-[100%] md:h-[80%]' src="https://lottie.host/embed/516b9652-64e6-4432-a08f-b507a8d8ad3e/tLv5NCNX09.lottie"></iframe>
          </div>
      </div>
  )
}

export default About