import React, { useRef } from 'react';
import './App.css';
import AboutMe from './components/AboutMe';
import Header from './components/Header'
import Intro from './components/Intro';
import Projects from './components/Projects';

function App() {
  const projects = useRef(null)
  const aboutMe = useRef(null)

  return (
    <>
    <style>{'body {font-family: `Raleway`, sans-serif;}'}</style>
    <Header projects={projects} aboutMe={aboutMe}/>
    <Intro></Intro>
    <AboutMe ref={aboutMe}></AboutMe>
    <Projects ref={projects}></Projects>
    </>
  );
}

export default App;
