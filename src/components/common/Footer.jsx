

export function Footer() {
    return (
        <footer className="bg-slate-800 border-t border-[#F7F2D5] w-full py-4 mt-10">
            <div className="flex flex-col items-start space-y-10 sm:flex-row sm:justify-between  mb-10 px-10 text-white mt-10">
                <div className="flex flex-col w-full sm:w-1/2 space-y-2   ">
                   <h1 className="font-bold text-sm sm:text-2xl">Antonio Avola</h1>
                   <p className="font-light  text-xs sm:text-sm">Aspirante frontend developer in crescita🚀</p>
                </div>
                <div className="flex flex-col space-y-2">
                   <h1 className="font-bold text-sm sm:text-2xl">Social:</h1>
                   <div className="flex justify-center items-center space-x-4 mt-3">
                       <a href="https://www.instagram.com/antonio_avola_/" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                           <img src="/icons/instagramW.png" alt="Instagram" />
                       </a>
                       <a href="https://github.com/AntonioAvola" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                           <img src="/icons/githubW.png" alt="GitHub" />
                       </a>
                       <a href="https://www.linkedin.com/in/antonio-avola-859655377/" target="_blank" rel="noopener noreferrer" className="w-6 h-6">
                           <img src="/icons/linkedinW.png" alt="LinkedIn" />
                       </a>
                   </div>
                </div>
            </div>
             <hr className="border-t border-slate-600 mb-4" />
            <div className="container mx-auto text-center">
                <p className="text-slate-400">
                    &copy; {new Date().getFullYear()} Copyright. Made by <span className="underline ">Antonio Avola</span>  
                </p>
            </div>
        </footer>
    );
}


