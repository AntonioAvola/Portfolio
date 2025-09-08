import { motion } from "framer-motion";
import { useRef } from "react";
import { forwardRef } from "react";

export const Hero = forwardRef((props, ref) => {
    const aboutRef  = useRef(null);

    const text = "Ciao, sono Antonio";
    const words = text.split(" ");

    const container = {
        hidden: { opacity: 0, y: 40 },
        visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.3, delayChildren: 0.04 * i },
        })
    }

    const child = {
        visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
        },
        },
        hidden: {
        opacity: 0,
        y: 20,
        },
    };


    return (
        <section ref={ref} className="flex flex-col items-center py-10">
            <div className="h-8 sm:h-10 2xl:h-30"></div>

            {/* Container principale centrato */}
            <div className="w-full flex flex-col items-center text-center space-y-20">
                
                {/* Titolo animato */}
                <motion.h1
                style={{ 
                    overflow: "hidden", 
                    display: "flex", 
                    flexWrap: "wrap",
                    justifyContent: "center",
                    width: "fit-content"
                }}
                variants={container}
                initial="hidden"
                animate="visible"
                className="text-5xl lg:text-8xl 2xl:text-7xl font-bold tracking-tight"
                >
                {words.map((word, index) => (
                    <motion.span
                    variants={child}
                    style={{ marginRight: "0.5rem" }}
                    key={index}
                    className={word === "Antonio" 
                        ? "text-transparent bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text" 
                        : "text-slate-800"}
                    >
                    {word}
                    </motion.span>
                ))}
                </motion.h1>

                {/* Sottotitolo */}
                <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="space-y-10 max-w-3xl"
                >
                <div>
                    <h2 className="text-xl lg:text-3xl font-semibold text-slate-800 mb-3">
                    Aspirante <span className="text-orange-500">[frontend Developer]</span>
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                    Creo interfacce semplici, accessibili e piacevoli da usare, imparando e migliorando a ogni progetto.
                    </p>
                </div>
                
                <div>
                    <h2 className="text-xl lg:text-3xl font-semibold text-slate-800 mb-3">
                    <span className="text-orange-500">[Il design]</span> come motore creativo
                    </h2>
                    <p className="text-slate-600 text-lg leading-relaxed">
                    Mi piace trasformare idee complesse in esperienze semplici e funzionali. 
                    </p>
                </div>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                ref={aboutRef}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-center space-x-2 text-slate-600 hover:text-orange-500 transition-colors cursor-pointer"
                onClick={() => aboutRef.current.scrollIntoView({ behavior: "smooth" })}
                >
                <span className="text-lg">Scorri e scopri di più</span>
                <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                </motion.div>
            </div>
        </section>

    )
});