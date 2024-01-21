import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import './App.css';


const App = () => {

  return (
    <>
      <Nav/>
      <Home/>
      <About/>
      <Skills/>
    </>
  )
}

export default App;