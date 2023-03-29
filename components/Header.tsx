import React from 'react';
import { motion } from "framer-motion";
import { SocialIcon } from 'react-social-icons';
import Link from "next/link";

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
         <div className='bg-bgColor-transperent fg-fgColor-gray'>
         <motion.div
                initial={{
                    x: -500,
                    opacity: 0,
                    scale: 0.5
                }}

                animate={{
                    x: 0,
                    opacity: 1,
                    scale: 1
                }}

                transition={{
                    duration: 1.5,
                }}
                className='flex flex-row items-center'>

            <SocialIcon url="https://www.facebook.com/camilla.reppen.7/" fgColor='gray' bgColor='transparent'/>
                  
           


                    <SocialIcon url="https://www.linkedin.com/in/camilla-reppen-18156719b/" fgColor='gray' bgColor='transparent'/>
                  


            
                    <SocialIcon url="https://github.com/camilla-design" fgColor='gray' bgColor='transparent' />
                    </motion.div>
                     
                </div>
                
                
               

               
                <motion.div
                    initial={{
                        x: 500,
                        opacity: 0,
                        scale: 0.5
                    }}

                    animate={{
                        x: 0,
                        opacity: 1,
                        scale: 1
                    }}
                    transition={{
                        duration: 1.5,
                    }}
                    className='flex flex-row items-center text-gray-400 cursor-pointer'>
                         
                       
                        <SocialIcon
                        className='crusior-pointer'
                        network='email'
                        fgColor='gray'
                        bgColor='transparent'
                        url='http://localhost:3000/#contact' />
                        
                        <Link href="#contact">
                        <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Ta Kontakt</p>
                       
                        </Link>
                    
                        </motion.div>   
                        
                        
                      
           
            
       
            
    </div>
  )
}