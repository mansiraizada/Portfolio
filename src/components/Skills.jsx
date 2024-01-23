import React from 'react';
import { IoIosCheckmark } from 'react-icons/io';
 
const techSkills = [
  {
    id: 0,
    img: 'react.png',
    skill: 'React',
  },
{
    id: 1,
    img: 'redux.png',
    skill: 'Redux',
  },
{
    id: 2,
    img: 'javascript.png',
    skill: 'JavaScript',
  },
{
    id: 3,
    img: 'html.png',
    skill: 'html',
  },
{
    id: 4,
    img: 'css.png',
    skill: 'css',
  },
  {
    id: 5,
    img: 'tailwind.png',
    skill: 'tailwind css',
  },
  {
    id: 6,
    img: 'gsap.svg',
    skill: 'gsap',
  },
  {
    id: 7,
    img: 'vite.svg',
    skill: 'vite',
  },
  {
    id: 8,
    img: 'jest.png',
    skill: 'jest',
  },
  ];
const tools = ['Git + Github', 'VS Code', 'JIRA', 'ECMAScript 6', 'TDD', 'API Integration'];
 
const Skills = () => {
 
  return (
    <div className='w-full overflow-hidden h-screen bg-gradient-to-b from-gray-700 to-gray-900 py-6 md:p-12'>
      <h1 className='font-bold text-4xl uppercase text-white px-4 pb-4 md:pb-0'>Skills</h1>
      <div className='w-full h-[95%] pt-2 md:p-10 md:flex'>
        <div className=' w-full h-fit md:h-[100%]'>
          <h1 className='text-xl mt-2 md:mt-0 md:text-2xl font-bold uppercase text-white px-4 pb-4'>Development</h1>
          <div className=' py-2 w-full md:w-[80%] h-[fit] md:h-[90%] flex flex-wrap justify-center gap-4 md:grid md:grid-cols-3 md:gap-4 md:p-8 md:py-0'>
            {techSkills.map((skill) => (
              <div className='flex flex-col items-center'>
                <div key={skill.id}
                className='uppercase w-[12vh] md:w-[8vw] h-[12vh] md:h-[8vw] text-white rounded-full text-center flex items-center justify-center font-semibold text-xs md:text-sm bg-gray-800 border-2 border-gray-600 hover:border-white hover:scale-105 transform transition duration-300'>
                <img src={skill.img} className='w-[50%] h-[50%] object-contain' />
                </div>
                <p className='uppercase font-semibold text-white'>{skill.skill}</p>  
              </div>
            ))}
          </div>
        </div>
        <div className='mt-8 md:mt-1 w-full h-full md:h-[100%]'>
          <h1 className='text-xl md:text-2xl font-bold uppercase text-white px-4 pb-4'>Tools & Knowledge</h1>
          <div className='px-4'>
            {tools.map((tool, i) => (
              <h1 key={i}
                className='flex items-center font-semibold md:py-2 text-white'>
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