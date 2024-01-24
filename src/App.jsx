import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Demo from './components/Demo';
// import './App.css';


const App = () => {

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <div className='bg-gradient-to-b from-gray-700 to-gray-900'>
        <Skills/>
        <Project />
        <Demo/>
      </div> 
    </>
  )
}

export default App;