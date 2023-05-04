import React from 'react';
import { motion } from "framer-motion";
import { Project } from '@/typings';
import { urlFor } from "@/sanity";

type Props = {
    project: Project[];
}

function Projects({ project }: Props) {
    
    return (

        <motion.div
            initial={{
                opacity: 0,
            }}

            animate={{
                opacity: 1,
            }}

            transition={{
                duration: 1.5,
            }}
            className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
            <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-400 text-sm'>Prosjekter</h3>

            <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]'>
                {project.map((project, i) => (
                    <div key={project._type} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-1 items-center justify-center p-20 md:p-44 h-screen'>
                      
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0,
                            }}
                            transition={{
                                duration: 1.2,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            viewport={{
                                once: true,
                            }}


                            src={urlFor(project.image).url()} />

                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='uppercase text-l text-gray-400 text-center'>Prosjekt {i + 1} av : <br></br><span className='uppercase tracking-[13px] text-gray-300'>{project?.title}</span></h4>
                           
                            <p className='text-m text-center md:text-left text-gray-300'> {project?.summary}</p>

                        </div>

                    </div>
                ))}

            </div>

            <div className='w-full absolute top-[30%] bg-[#2272FF]/40 left-0 h-[500px] -skew-y-12' />
        </motion.div>
    )
}

export default Projects