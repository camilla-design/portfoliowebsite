import React from 'react';
import { motion } from "framer-motion";
import { FeedbackInformation } from '@/typings';
import { urlFor } from "@/sanity";

type Props = {
    feedbackInfo: FeedbackInformation;
}

function FeedbackCards({ feedbackInfo }: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-2 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[800px] snap-center bg-[#CC8D3B] p-5 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
        initial={{
            y: -100,
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
         className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
         src={urlFor(feedbackInfo?.image).url()}/>

         <div className='px-0 md:px-5 text-[#000000]'>
             <h4 className='text-1xl font-light'>{feedbackInfo?.jobPlace}</h4>
             <p className='uppercase text-2l mt-2'>{feedbackInfo?.name}</p>
             <p className='text-[#000000] uppercase tracking-[8px] mb-2'>{feedbackInfo?.jobTitle}</p>
             <p className='w-[300px] md:w-[300px] xl:w-[500px]'> {feedbackInfo?.feedback}</p>
         </div>
    </article>
  )
}

export default FeedbackCards