import React from 'react'

const About = () => {
  return (
      <div className=' w-full h-[100vh] p-4 flex flex-col md:flex-row gap-2 items-center'>
          <div className='w-full h-fit md:h-full md:p-10 md:py-16 md:text-xl'>
          I'm currently an Engineer at <b>Tata Consultancy Services</b>,
          building things for the web with some awesome people.
          I graduated from <b>Pranveer Singh Institute of Technology</b>.
          As a software engineer, I enjoy bridging the gap between
          engineering and design — combining my technical knowledge
          with my keen eye for design to create a beautiful product.
          My goal is to always build web applications that are scalable
          and efficient under the hood while providing engaging,
          pixel-perfect user experiences.
          </div>   
          <div className='w-full h-[80%] bg-green-200'>
              
          </div>
      </div>
  )
}

export default About