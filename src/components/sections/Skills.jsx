import {motion} from "framer-motion";
import { 
  SiAngular, 
  SiNodedotjs, 
  SiReact, 
  SiHtml5, 
  SiJavascript,
  SiGithub, 
  SiGit, 
  SiCss3,
} from 'react-icons/si'

import { FaJava, FaFigma } from "react-icons/fa";

const iconMap = {
  figma: FaFigma,
  angular: SiAngular,
  nodejs: SiNodedotjs,
  react: SiReact,
  html5: SiHtml5,
  javascript: SiJavascript,
  java: FaJava,
  github: SiGithub,
  git: SiGit,
  css3: SiCss3
}

import {skillsData} from '../../data/skillsData'

export function Skills() {
    return (
        <motion.section 
            className="py-5 px-4 bg-orange-400"
            initial={{ opacity: 0, y: 50 }} // parte invisibile e più in basso
            whileInView={{ opacity: 1, y: 0 }} // diventa visibile e si muove su
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}>
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-5xl x text-amber-900 text-center mb-12">
                Skills
                </h2>
                
                <div className="flex flex-wrap justify-center gap-8">
                {skillsData.map((skill, index) => {
                    const IconComponent = iconMap[skill.icon]
                    return (
                    <div 
                        key={index} 
                        className="flex flex-col items-center gap-3 group cursor-pointer"
                    >
                        <div className="text-amber-900 transition-transform duration-300 group-hover:scale-110">
                        <IconComponent size={60} className="w-12 h-12 md:w-15 md:h-15" />
                        </div>
                        <span className="text-amber-900 font-medium text-sm md:text-base text-center">
                        {skill.name}
                        </span>
                    </div>
                    )
                })}
                </div>
            </div>
        </motion.section>
    )
}