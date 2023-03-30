import React from 'react';
import { motion } from "framer-motion";
import FeedbackCard from './FeedbackCards';

type Props = {}

function Feedback({}: Props) {
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

    className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[15px] text-gray-400 pb-2 text-sm'>Omtale</h3>

        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]'>
            
            <FeedbackCard />
            <FeedbackCard />
            <FeedbackCard />
        </div>
    </motion.div>
  )
}

export default Feedback