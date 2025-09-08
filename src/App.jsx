import './App.css'
import { useState } from 'react'
import { Header } from './components/common/Header'
import { Hero } from './components/sections/Hero'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { useRef } from "react";
import { Footer } from './components/common/Footer'
import { Contacts } from './components/sections/Contacts'





function App() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const homeRef = useRef(null);
  const contactRef = useRef(null);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="p-10 sm:p-8 lg:p-12"> 
      <Header 
        isMenuOpen={isMenuOpen} 
        setIsMenuOpen={setIsMenuOpen}
        aboutRef={aboutRef}
        projectsRef={projectsRef}
        homeRef={homeRef}
        contactRef={contactRef}
      />
      
      <main className='principale flex flex-col justify-center items-center'>
        <Hero ref={homeRef} />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} />
        <div className='divisore h-30 sm:h-80'></div>
        <Contacts ref={contactRef} />
      </main>


      <Footer />


      {/* Overlay per chiudere il menu cliccando fuori (opzionale) */}
            {isMenuOpen && (
                <div 
                className="md:hidden fixed inset-0 bg-[#00000066] z-40"
                onClick={() => setIsMenuOpen(false)}
                />
            )}
    </div>
  )
}

export default App
