import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";

export function Header({ aboutRef, projectsRef, homeRef, isMenuOpen, setIsMenuOpen, contactRef }) {
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };  

    const handleNavClick = (scrollFunction) => {
    scrollFunction();
    setIsMenuOpen(false); // Chiude il menu dopo il click
  };

    const SCROLL_MARGIN = 10;

    useEffect(() => {
        const controlHeader = () => {
            const currentScrollY = window.scrollY;
            
            if(currentScrollY < 10){
                setIsVisible(true);
            } else if(lastScrollY.current - currentScrollY > SCROLL_MARGIN) {
                setIsVisible(true);
            }else if(currentScrollY - lastScrollY.current > 0) {
                setIsVisible(false);
            }

            lastScrollY.current = currentScrollY;
            //console.log("ScrollY:", currentScrollY, "LastScrollY:", lastScrollY, "isVisible:", isVisible);
        };

        window.addEventListener('scroll', controlHeader);
        
        return () => {
            window.removeEventListener('scroll', controlHeader);
        };
    }, []);

    return (
        <>
        <motion.div 
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className={`fixed flex justify-center sm:justify-between top-0 left-0 right-0 z-50 
            transition-transform duration-500 ease-in-out
            ${isVisible ? 'translate-y-0' : '-translate-y-full'}
            px-10 sm:px-12 py-8`}
            >
            <div className="w-full sm:w-120">
                <header className="bg-slate-800 backdrop-blur-lg border border-[#F7F2D5] w-full relative">
                    <nav className="px-4 sm:px-6">
                    {/* Desktop Navigation */}
                    <ul className="hidden md:flex flex-row justify-center items-center text-[#F7F2D5] py-4 text-base sm:text-lg font-semibold gap-4 sm:gap-10">
                        <li>
                        <button 
                            onClick={() => homeRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="hover:text-orange-400 transition-colors duration-200"
                        >
                            Home
                        </button>
                        </li>
                        <li>
                        <button
                            onClick={() => aboutRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="cursor-pointer hover:text-orange-400 transition-colors duration-200"
                        >
                            Su di me
                        </button>
                        </li>
                        <li>
                        <button 
                            onClick={() => projectsRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="hover:text-orange-400 transition-colors duration-200"
                        >
                            Progetti
                        </button>
                        </li>
                        <li>
                        <button 
                            onClick={() => contactRef.current?.scrollIntoView({ behavior: "smooth" })}
                            className="hover:text-orange-400 transition-colors duration-200"
                            
                        >
                            Contatti
                        </button>
                        </li>
                    </ul>

                    {/* Mobile Navigation */}
                    <div className="md:hidden flex justify-between items-center py-4">
                        <div className="text-[#F7F2D5] font-semibold text-lg">
                        Antonio Avola
                        </div>
                        
                        {/* Hamburger Button */}
                        <button
                        onClick={toggleMenu}
                        className="text-[#F7F2D5] focus:outline-none focus:text-orange-400 transition-colors duration-200"
                        aria-label="Toggle menu"
                        >
                        <svg 
                            className="w-6 h-6" 
                            fill="none" 
                            stroke="currentColor" 
                            viewBox="0 0 24 24"
                        >
                            {isMenuOpen ? (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M6 18L18 6M6 6l12 12" 
                            />
                            ) : (
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth={2} 
                                d="M4 6h16M4 12h16M4 18h16" 
                            />
                            )}
                        </svg>
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div className={`md:hidden absolute top-full left-0 right-0 bg-slate-800 border-t border-[#F7F2D5] transform transition-all duration-300 ease-in-out z-50 ${
                        isMenuOpen 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 -translate-y-2 pointer-events-none'
                    }`}>
                        <ul className="flex flex-col text-[#F7F2D5] font-semibold">
                        <li>
                            <button 
                            onClick={() => handleNavClick(() => homeRef.current?.scrollIntoView({ behavior: "smooth" }))}
                            className="w-full text-left px-6 py-4 hover:bg-slate-700 hover:text-orange-400 transition-all duration-200 border-b border-slate-700"
                            >
                            Home
                            </button>
                        </li>
                        <li>
                            <button
                            onClick={() => handleNavClick(() => aboutRef.current?.scrollIntoView({ behavior: "smooth" }))}
                            className="w-full text-left px-6 py-4 hover:bg-slate-700 hover:text-orange-400 transition-all duration-200 border-b border-slate-700"
                            >
                            Su di me
                            </button>
                        </li>
                        <li>
                            <button 
                            onClick={() => handleNavClick(() => projectsRef.current?.scrollIntoView({ behavior: "smooth" }))}
                            className="w-full text-left px-6 py-4 hover:bg-slate-700 hover:text-orange-400 transition-all duration-200 border-b border-slate-700"
                            >
                            Progetti
                            </button>
                        </li>
                        <li>
                            <button 
                            onClick={() => handleNavClick(() => {})}
                            className="w-full text-left px-6 py-4 hover:bg-slate-700 hover:text-orange-400 transition-all duration-200"
                            >
                            Contatti
                            </button>
                        </li>
                        </ul>
                    </div>
                    </nav>
                </header>

                
            </div>
            
            <div className="hidden sm:flex items-center ">
                <a  href="https://www.instagram.com/antonio_avola_/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-pink-500 transition-colors ">
                    {/* <img src="/icons/instagram.svg" alt="instagram" className="w-8 h-8"/> */}
                    <svg fill="currentColor" className="w-10 h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="0 0 455.73 455.73" xmlSpace="preserve">
                    <path d="M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33
                        C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33
                        c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37
                        c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
                        C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
                        c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
                        s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
                        c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66
                        H152.37c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
                        C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
                        c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
                        s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
                        c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M0,0v455.73h455.73
                        V0H0z M380.23,303.36c0,42.39-34.48,76.87-76.87,76.87H152.37c-42.39,0-76.87-34.48-76.87-76.87V152.37
                        c0-42.39,34.48-76.87,76.87-76.87h150.99c42.39,0,76.87,34.48,76.87,76.87V303.36z M303.36,108.66H152.37
                        c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
                        C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
                        c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
                        s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
                        c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55
                        c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33
                        C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33
                        c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37
                        c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
                        C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
                        c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
                        s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
                        c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55
                        c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33
                        C273.18,202.88,252.85,182.55,227.86,182.55z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31c0,24.99,20.34,45.33,45.32,45.33
                        c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z M303.36,108.66H152.37
                        c-24.1,0-43.71,19.61-43.71,43.71v150.99c0,24.1,19.61,43.71,43.71,43.71h150.99c24.1,0,43.71-19.61,43.71-43.71V152.37
                        C347.07,128.27,327.46,108.66,303.36,108.66z M227.86,306.35c-43.27,0-78.48-35.21-78.48-78.49c0-43.27,35.21-78.48,78.48-78.48
                        c43.28,0,78.49,35.21,78.49,78.48C306.35,271.14,271.14,306.35,227.86,306.35z M308.87,165.61c-10.24,0-18.57-8.33-18.57-18.57
                        s8.33-18.57,18.57-18.57s18.57,8.33,18.57,18.57S319.11,165.61,308.87,165.61z M227.86,182.55c-24.98,0-45.32,20.33-45.32,45.31
                        c0,24.99,20.34,45.33,45.32,45.33c24.99,0,45.32-20.34,45.32-45.33C273.18,202.88,252.85,182.55,227.86,182.55z"/>
                    </svg>
                </a>
                <a 
                    href="https://github.com/AntonioAvola" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-[#24292e] transition-colors">
                    {/* <img src="/icons/github.svg" alt="github" className="w-8 h-8"/> */}
                    <svg fill="currentColor" className="w-10 h-10" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
                        viewBox="-143 145 512 512" xmlSpace="preserve">
                    <g>
                        <path d="M-143,145v512h512V145H-143z M244.2,423.4c-1.4,11.4-3.8,23.1-7.9,33.8c-12,30.7-36,47.6-67.8,52.7
                            c-18.2,2.9-36.9,3-57.1,4.5c-18.1-1.6-38-1.8-57.3-5.2c-37.4-6.6-62.8-32.8-70.2-70.3c-3.8-19.1-4.9-38.3,1-57.3
                            c3.1-9.8,8.2-18.5,14.8-26.4c0.9-1,1.7-2.5,1.6-3.8c-1.1-17.2,0.9-34.2,6-50.6c4.2-13.7,1.1-12.9,16.3-8.9
                            c18.3,4.8,34.3,14.7,50,25c1.8,1.2,4.6,1.7,6.8,1.3c22.2-3.4,44.3-3.6,66.5,0.3c1.6,0.3,3.7-0.3,5.2-1.2
                            c13.5-8.8,27.4-16.7,42.6-22.2c5.5-2,11.3-3.3,16.9-5c2.5-0.7,3.6,0.2,4.5,2.6c6.8,19,9.6,38.5,8.6,58.6c-0.1,1.1,0.5,2.6,1.2,3.5
                            C243,374.6,247.3,398.2,244.2,423.4z"/>
                        <path d="M177.1,398.4c-8.6-1.5-17.6-1.3-26.4-0.8c-20,1.1-40,3-60,1.2c-9.5-0.9-19.1-1.8-28.7-1.6c-17.4,0.3-32,6-40.6,22.6
                            c-4.3,8.2-5.3,17-5,26.1c0.7,25.6,11.8,40.2,36.2,47.5c19.6,5.8,39.7,6.6,59.9,6.2c7.5,0,15,0.4,22.5-0.1
                            c15.5-0.9,30.7-3.2,45.4-8.6c15.2-5.6,24.3-16.3,27.6-31.8c1.3-6,1.9-12.3,1.8-18.4C209.6,420,195.6,401.5,177.1,398.4z
                            M78.7,466.1c-6.5,7.1-15.9,7.2-22.6,0.3c-4.9-5-7.7-12.7-7.7-22.3c0.2-6.5,2.1-13.6,7.7-19.3c6.7-6.9,16.1-6.8,22.6,0.2
                            C88.5,435.6,88.5,455.5,78.7,466.1z M169.6,466.6c-6.1,6.3-14.9,6.5-21.4,0.7c-11.2-10.2-11.2-32.9,0-43.2
                            c6.4-5.9,15.2-5.7,21.4,0.6c5.7,5.8,7.6,13.1,7.9,20.9C177.2,453.5,175.2,460.7,169.6,466.6z"/>
                    </g>
                    </svg>
                </a>
                <a  href="https://www.linkedin.com/in/antonio-avola-859655377/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-slate-800 hover:text-[#0A66C2] transition-colors"
                    >
                    {/* <img src="/icons/linkedin.svg" alt="linkedin" className="w-8 h-8"/> */}

                     <svg fill="currentColor" viewBox="-143 145 512 512" className="w-10 h-10">
                        <path d="M-143,145v512h512V145H-143z M41.4,508.1H-8.5V348.4h49.9V508.1z M15.1,328.4h-0.4c-18.1,0-29.8-12.2-29.8-27.7
                            c0-15.8,12.1-27.7,30.5-27.7c18.4,0,29.7,11.9,30.1,27.7C45.6,316.1,33.9,328.4,15.1,328.4z M241,508.1h-56.6v-82.6
                            c0-21.6-8.8-36.4-28.3-36.4c-14.9,0-23.2,10-27,19.6c-1.4,3.4-1.2,8.2-1.2,13.1v86.3H71.8c0,0,0.7-146.4,0-159.7h56.1v25.1
                            c3.3-11,21.2-26.6,49.8-26.6c35.5,0,63.3,23,63.3,72.4V508.1z"/>
                    </svg>
                </a>
            </div>
            
        </motion.div>
       
        </>

    )
}