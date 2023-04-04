import React from 'react';
import { motion } from "framer-motion";
import { PageInfo } from '@/typings';
import { urlFor } from "@/sanity";



type Props = {
    pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
    return (
        <motion.div
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
            }}
            transition={{
                duration: 1.4,
            }}

            className='flex flex-col relative  h-screen text-center md:text-left md:flex-row max-w-7xl px-18 justify-evenly mx-auto items-center'>
            <h3 className='absolute top-20 uppercase text-gray-400 pb-2 tracking-[15px] text-sm'>Om meg</h3>

            <motion.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                }}
                transition={{
                    duration: 1.4,
                }}
                viewport={{
                    once: true,
                }}
                src={urlFor(pageInfo?.heroImage).url()}
                className='-mb-20 mt-7 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-2xl lg:w-[400px] lg:h-[400px]'
            />
            <div className='space-y-3 px-0 md:px-10'>
                <h4 className='text-2xl text-[#2272FF] font-semibold'>Her er <span className='underline decoration-gray-400'>litt</span>{" "} om meg</h4>
                <p className='text-base p-4 md:p-0 w-[360px] md:w-[400]'  > {pageInfo?.backgroundInformation}</p>
            </div>
        </motion.div>
    )
}

export default About