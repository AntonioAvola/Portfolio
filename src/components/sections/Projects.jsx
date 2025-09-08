import { ProjectCard } from "../UI/ProjectCard"
import { forwardRef } from "react"

export const Projects = forwardRef((props, ref) => {
    return (
        <section ref={ref} id="projects" className="w-full py-16 px-4 bg-slate-800 h-100 overflow-visible">
            <div className="container flex flex-col justify-center items-start ">
                <h2 className="text-5xl  text-white text-center mb-12">
                    Alcuni dei miei progetti: 
                </h2>
                <div className="w-100 -ml-9 sm:ml-0 sm:w-333 2xl:w-425">
                    <ProjectCard />
                </div>
            </div>
            
        </section>
    )
});