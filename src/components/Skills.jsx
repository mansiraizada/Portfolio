import React from 'react'
import { IoIosCheckmark } from "react-icons/io";

const techSkills = ['JavaScript', 'CSS', 'HTML', 'REDUX', 'REACT', 'JEST', 'TAILWIND CSS', 'GSAP', 'Vite']
const tools = ['Git + Github', 'VS Code', 'JIRA', 'ECMAScript 6', 'TDD', 'API Integration']

const Skills = () => {
  return (
    <div className='w-full h-[100vh] bg-gray-500 py-6 md:p-12'>
      <h1 className='font-bold text-4xl uppercase px-4 pb-4 md:pb-0'>Skills</h1>
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
        <div className='w-full h-[50%] pt-8 md:pt-0 md:h-[100%]'>
          <h1 className='text-xl md:text-2xl font-bold uppercase px-4 pb-4'>Tools & Knowledge</h1>
          <div className='px-4'>
            {tools.map((tool, i) =>
              <h1 key={i} className='flex items-center font-semibold md:py-1'><IoIosCheckmark className=''/>{tool}</h1>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills