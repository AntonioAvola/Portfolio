import { motion } from "framer-motion";
import { Skills } from "./Skills";
import { forwardRef } from "react";

export const About = forwardRef((props, ref) => {
    return (
        <motion.div
            ref={ref} 
            className="flex flex-col bg-slate-800 w-full mt-20"
            initial={{ opacity: 0, y: 50 }} // parte invisibile e più in basso
            whileInView={{ opacity: 1, y: 0 }} // diventa visibile e si muove su
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            >
            <div className="flex flex-col p-5 text-white space-y-5">
                <div className="space-y-6">
                    <h1 className="text-5xl  text-white">
                        Su di me
                    </h1>
                    
                    {/* Introduzione principale */}
                    <div className="space-y-4">
                        <p className="text-lg font-light leading-relaxed text-gray-300">
                            Ciao! Sono neoLaureato in <span className="font-bold">Informatica</span> presso <a href="https://www.unicam.it/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:text-orange-400">l'Università degli studi di Camerino</a>, e durante gli ultimi anni di studio <span className="font-bold">ho sviluppato una forte passione per il design e lo sviluppo di applicazioni web</span>. 
                            Sono ancora alle prime armi, ma ogni giorno cerco di migliorare le mie competenze e di apprendere nuove tecnologie dedicando a questa passione gran parte del mio tempo.
                            Amo le sfide creative, mi permettono di mettermi alla prova e di crescere sia dal punto di vista tecnico che personale.
                        </p>    
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8 ">
                    <div className="bg-slate-700/50 p-6 relative overflow-hidden">
                        <h3 className="text-xl font-semibold text-gray-300 mb-3">Il mio approccio⚙️</h3>
                        <p className="text-gray-300 font-light leading-relaxed">
                            <span className="font-bold">Credo nel valore del design sistemico:</span> prima visualizzo su Figma per allineare visione e funzionalità, poi sviluppo con codice pulito e ben strutturato. Ogni progetto è un'opportunità per crescere e creare esperienze che parlino alle persone, non solo ai pixel.
                        </p>
                    </div>
                    
                    <div className="bg-slate-700/50 p-6  ">
                        <h3 className="text-xl font-semibold text-yellow-400 mb-3">Quando non programmo✨</h3>
                        <p className="text-gray-300 font-light leading-relaxed">
                            <span className="font-bold">Nel tempo libero amo circondarmi di ciò che mi fa stare bene:</span> la musica, che accompagna le mie giornate, 
                            il disegno, che mi permette di dare forma alle idee, e le passeggiate nella natura, 
                            dove riesco a rilassarmi e trovare nuove prospettive per ciò che faccio. 
                        </p>
                    </div>
                </div>
                
            </div>

            <div className="flex justify-center items-center mt-1">
                <Skills />
            </div>
            
        </motion.div>
    )
});