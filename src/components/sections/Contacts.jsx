import { forwardRef } from "react";
import { motion } from "framer-motion";

export const Contacts = forwardRef((props, ref) => {
    return (
            <motion.div ref={ref} className="contatti w-full mt-65 sm:mt-0"
                initial={{ opacity: 0, y: 50 }} // parte invisibile e più in basso
                whileInView={{ opacity: 1, y: 0 }} // diventa visibile e si muove su
                transition={{ duration: 0.5, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col justify-center items-center mb-16">
                        <h1 className="text-5xl text-slate-800 tracking-tight">
                            Contatti
                            <div className="w-24 h-1 bg-orange-400 mt-4 ml-12"></div>
                        </h1>
                        <p className="text-xl text-slate-600 mt-6 font-light">
                            Mettiti in contatto con me attraverso questi canali
                        </p>
                    </div>
                    
                    <motion.div 
                        className="grid grid-cols-1 md:grid-cols-3 gap-0 shadow-2xl overflow-hidden"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="group relative flex flex-col justify-center items-start md:items-center space-y-6 bg-orange-400 p-12 text-amber-900 hover:bg-orange-500 transition-all duration-300 transform hover:scale-105 hover:z-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-orange-300 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-left md:text-center w-full">
                                <div className="w-16 h-16 bg-amber-900 rounded-none flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 mx-0 md:mx-auto">
                                    <img className="w-8 h-8" src="/icons/email2.png" alt="Email icon" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3">La mia email</h2>
                                <p className="font-medium text-sm sm:text-lg group-hover:text-white transition-colors duration-300">
                                    antonio.avola02@gmail.com
                                </p>
                                <div className="w-full h-0.5 bg-amber-900 mt-4 group-hover:bg-white transition-colors duration-300"></div>
                            </div>
                        </div>

                        <div className="group relative flex flex-col justify-center items-start md:items-center space-y-6 bg-slate-800 p-12 text-white hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 hover:z-10">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-left md:text-center w-full">
                                <div className="w-16 h-16 bg-white rounded-none flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 mx-0 md:mx-auto">
                                    <img className="w-8 h-8" src="/icons/telephone2.png" alt="Phone icon" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3">Il mio numero</h2>
                                <p className="font-medium text-lg group-hover:text-orange-400 transition-colors duration-300">
                                    +39 391 306 9859
                                </p>
                                <div className="w-full h-0.5 bg-white mt-4 group-hover:bg-orange-400 transition-colors duration-300"></div>
                            </div>
                        </div>

                        <div className="group relative flex flex-col justify-center items-start md:items-center space-y-6 bg-white p-12 text-slate-800 hover:bg-slate-50 transition-all duration-300 transform hover:scale-105 hover:z-10 border-2 border-slate-200">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="relative z-10 text-left md:text-center w-full">
                                <div className="w-16 h-16 bg-slate-800 rounded-none flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300 group-hover:bg-orange-400 mx-0 md:mx-auto">
                                    <img className="w-8 h-8 filter invert group-hover:invert-0 transition-all duration-300" src="/icons/download.png" alt="Download icon" />
                                </div>
                                <h2 className="text-2xl font-bold mb-3">Scarica il mio CV</h2>
                                <a 
                                    href="/CV/CV_Avola_Antonio.pdf" 
                                    download 
                                    className="inline-block px-6 py-3 bg-slate-800 text-white font-semibold hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 border-2 border-slate-800 hover:border-orange-400"
                                >
                                    Clicca qui
                                </a>
                                <div className="w-full h-0.5 bg-slate-800 mt-4 group-hover:bg-orange-400 transition-colors duration-300"></div>
                            </div>
                        </div>
                    </motion.div>
                
                </div>
            </motion.div>
    )
});