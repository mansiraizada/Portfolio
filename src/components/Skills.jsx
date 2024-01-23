import React from 'react'

const techSkills = ['JavaScript', 'CSS', 'HTML', 'REDUX', 'REACT', 'JEST', 'TAILWIND CSS', 'GSAP', 'Vite']

const Skills = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-500 p-4 py-6 md:p-12'>
      <h1 className='font-bold text-4xl uppercase'>Skills</h1>
      <div className='w-full h-[95%] pt-2 md:p-10 md:flex'>
        <div className='w-full h-fit md:h-[100%]'>
          <h1 className='text-xl md:text-2xl font-bold uppercase pb-6'>Development</h1>
          <div className='w-full h-[fit] flex flex-wrap justify-center gap-2'>
            {techSkills.map((skill, i) =>
            <div key={i} className='w-[12vh] h-[12vh] rounded-full text-center flex items-center justify-center font-semibold text-xs uppercase bg-gray-700'>
              {skill}
            </div>
            )}
          </div> 
        </div>
        <div className='bg-yellow-300 w-full md:h-[100%]'></div>
      </div>
    </div>
  )
}

export default Skills