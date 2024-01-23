import React from 'react'

const techSkills = ['JavaScript', 'CSS', 'HTML', 'REDUX', 'REACT', 'JEST', 'TAILWIND CSS', 'GSAP', 'Vite']

const Skills = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-500 py-6 md:p-12'>
      <h1 className='font-bold text-4xl uppercase px-4'>Skills</h1>
      <div className='w-full h-[95%] pt-2 md:p-10 md:flex'>
        <div className='w-full h-fit md:h-[100%]'>
          <h1 className='text-xl md:text-2xl font-bold uppercase px-4 pb-4'>Development</h1>
          <div className='py-2 w-full md:w-[80%] h-[fit] md:h-[90%] flex flex-wrap justify-center gap-2 md:grid md:grid-cols-3 md:gap-[0] md:p-8 md:py-0'>
            {techSkills.map((skill, i) =>
            <div key={i} className='w-[12vh] md:w-[9vw] h-[12vh] md:h-[9vw] text-white rounded-full text-center flex items-center justify-center font-semibold text-xs md:text-sm uppercase bg-gray-700'>
              {skill}
            </div>
            )}
          </div> 
        </div>
        <div className='bg-yellow-300 w-full md:h-[100%]'>
           <h1 className='text-xl md:text-2xl font-bold uppercase px-4 pb-4'>Tools & Knowledge</h1>
        </div>
      </div>
    </div>
  )
}

export default Skills