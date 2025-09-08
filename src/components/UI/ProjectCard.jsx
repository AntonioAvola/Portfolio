import { projects } from "../../data/projects";
import { Tools } from "./tools";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";


export function ProjectCard() {


    function scrollLeft() {
        const container = document.querySelector('.containerCard');
        const cardWidth = container.querySelector('.projectCard')?.offsetWidth || 300;
        const scrollAmount = cardWidth + 24; // 24px is the gap between cards
        container.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    }

    function scrollRight() {
        const container = document.querySelector('.containerCard');
        const cardWidth = container.querySelector('.projectCard')?.offsetWidth || 300;
        const scrollAmount = cardWidth + 24; // 24px is the gap between cards
        container.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }

    return (
        <div className="relative w-full">
            <button className="hidden sm:block absolute top-1/2 sm:-left-15 left-2 -translate-y-1/2 z-10 bg-slate-800/50 p-2 rounded-full hover:bg-slate-800/70"
                onClick={scrollLeft}>
                <IoIosArrowBack className="text-white w-6 h-6" />
            </button>

            {/* Freccia destra */}
            <button className="hidden sm:block absolute top-1/2 right-2 sm:-right-15 -translate-y-1/2 z-10 bg-slate-800/50 p-2 rounded-full hover:bg-slate-800/70"
                onClick={scrollRight}>
                <IoIosArrowForward className="text-white w-6 h-6" />
            </button>
            
            <motion.div 
                className="containerCard w-full overflow-x-auto projects-scroll  snap-x"
                style={{ scrollBehavior: 'smooth' }}
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
            >
            <motion.div 
                    className="flex space-x-6 pb-12"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: {
                            opacity: 1,
                            x: 0,
                            transition: {
                                staggerChildren: 0.15,
                                duration: 0.6,
                                ease: "easeOut"
                            }
                        }
                    }}
                >
                    {projects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="projectCard border border-slate-800 bg-[#F7F2D5] overflow-hidden flex flex-col justify-between w-70 sm:w-100 h-[36rem] sm:h-[30rem] flex-shrink-0 snap-center"
                            variants={{
                                hidden: { opacity: 0, x: -60 },
                                visible: { opacity: 1, x: 0 }
                            }}
                        >
                            {/* Immagine */}
                            <img 
                                src={project.imgUrl} 
                                alt={project.title} 
                                className="w-full h-48 sm:h-48 object-cover" 
                            />

                            {/* Contenuto principale */}
                            <div className="flex flex-col flex-1 justify-between mt-4">
                                <div className="px-4">
                                    <span className="text-xs sm:text-[0.65rem] text-gray-600 uppercase tracking-wide">
                                        {project.type}
                                    </span>
                                    <h3 className="text-xl sm:text-lg font-bold text-gray-900 mb-2 truncate">
                                        {project.title}
                                    </h3>
                                    <p className="text-sm sm:text-xs text-gray-600 mb-3 truncate">
                                        {project.target}
                                    </p>

                                    {/* Tools orizzontali */}
                                    <div className="flex mb-4">
                                        <Tools technologies={project.technologies} />
                                    </div>

                                    {/* Descrizione con altezza limitata */}
                                    <div className="text-gray-700 mb-4">
                                        <p className="text-slate-600 text-sm leading-relaxed break-words overflow-hidden line-clamp-3 sm:line-clamp-5">
                                            {project.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Link sempre in fondo */}
                                <div className="flex justify-center items-center px-4 pt-4 pb-4">
                                    <a 
                                        href={project.link} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-blue-800 font-semibold hover:underline"
                                    >
                                        Vai al progetto
                                    </a>
                                </div>
                            </div>
                        </motion.div>

                    ))}
                    <div className="w-18 flex-shrink-0"></div>

                </motion.div>
            </motion.div>      
        </div>
    );
}
