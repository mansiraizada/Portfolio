import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
 
const techSkills = ['JavaScript', 'CSS', 'HTML', 'REDUX', 'REACT', 'JEST', 'TAILWIND CSS', 'GSAP', 'Vite'];
const tools = ['Git + Github', 'VS Code', 'JIRA', 'ECMAScript 6', 'TDD', 'API Integration'];
 
const Skills = () => {
 
  return (
    <div
      className='w-full overflow-hidden h-screen bg-gradient-to-b from-gray-700 to-gray-900 py-6 md:p-12'
   
    >
      <h1 className='font-bold text-4xl uppercase text-white px-4 pb-4 md:pb-0'>Skills</h1>
      <div className='w-full h-[95%] pt-2 md:p-10 md:flex'>
        <div className=' w-full h-fit md:h-[100%]'>
          <h1 className='text-xl mt-2 md:mt-0 md:text-2xl font-bold uppercase text-white px-4 pb-4'>Development</h1>
          <div
            className=' py-2 w-full md:w-[80%] h-[fit] md:h-[90%] flex flex-wrap justify-center gap-4 md:grid md:grid-cols-3 md:gap-4 md:p-8 md:py-0'
           
          >
            {techSkills.map((skill, i) => (
              <div
                key={i}
                className='w-[12vh] md:w-[9vw] h-[12vh] md:h-[9vw] text-white rounded-full text-center flex items-center justify-center font-semibold text-xs md:text-sm bg-gray-800 border-2 border-gray-600 border-[#B5707C] hover:border-white hover:scale-105 transform transition duration-300'
               
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
        <div className='mt-10 md:mt-0 w-full h-full md:h-[100%]'>
          <h1 className='text-xl md:text-2xl font-bold uppercase text-white px-4 pb-4'>Tools & Knowledge</h1>
          <div
            className='px-4'
           
          >
            {tools.map((tool, i) => (
              <h1
                key={i}
                className='flex items-center font-semibold md:py-2 text-white'
             
              >
                <IoIosCheckmark className='text-green-500 mr-2' />
                {tool}
              </h1>
            ))}
          </div>
          <div className='w-[100%] h-[90%] relative hidden md:flex'>
          <iframe className='w-full h-full absolute bottom-0 -top-[20%]' src="https://lottie.host/embed/6f781c69-43dd-4e7f-9622-d45f46e58a1d/SdKgAj4E9N.lottie"></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};
 
export default Skills;