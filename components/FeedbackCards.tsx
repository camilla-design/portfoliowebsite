import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function FeedbackCards({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#CC8D3B] p-10 hover:opacity-100 opacity-70 cursor-pointer transition-opacity duration-200 overflow-hidden'>
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
         src="https://scontent.fosl3-1.fna.fbcdn.net/v/t1.6435-9/187962562_10159052699138654_6298518694505035789_n.png?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=qBsNwvqr9C0AX99znP-&_nc_ht=scontent.fosl3-1.fna&oh=00_AfDhfnv5-5LXzoJfiufICN8tGcXVpmmXzd1lDSYFJsphSw&oe=63DFED95"/>

         <div className='px-0 md:px-10 text-[#000000]'>
             <h4 className='text-1xl font-light'>Noroff School of Technology and Digital Media</h4>
             <p className='uppercase text-2l mt-2'>Mannuel Ferreira</p>
             <p className='text-[#000000] uppercase tracking-[8px] mb-2'>Lærer</p>
             <p className='w-[300px]'>" Camilla is one hungry mind with a big appetite for web design and front-end development. As a student Camilla asks many good questions and is detail orientated. She would make a great addition to any team. "</p>
         </div>
    </article>
  )
}

export default FeedbackCards