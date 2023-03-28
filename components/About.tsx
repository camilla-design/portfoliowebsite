import React from 'react';
import { motion } from "framer-motion";

type Props = {}

function About({ }: Props) {
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
            <h3 className='absolute top-24 uppercase text-gray-400 pb-2 tracking-[15px] text-sm'>Om meg</h3>

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
                src="https://scontent.fosl3-2.fna.fbcdn.net/v/t1.6435-9/83977659_10162783925640057_1055926471454883840_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=1mhKfkEqtL8AX_D8PO6&_nc_ht=scontent.fosl3-2.fna&oh=00_AfCobGFFnuKA5290uZTmJs_M0nPwf3qt0c0zkK4XLfV52Q&oe=644AD46E"
                className='-mb-20 mb:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-2xl lg:w-[400px] lg:h-[400px]'
            />
            <div className='space-y-3 px-0 md:px-10'>
                <h4 className='text-4xl text-[#CC8D3B] font-semibold'>Her er <span className='underline decoration-[#8C4D16]/50'>litt</span>{" "} om meg</h4>
                <p className='text-base p-4 md:p-0 w-[400px]'>Lidenskap for å designe og kode fine og funksjonelle bruker opplevelser. Samt lidenskap for å glede kundene og skape visjon av dems budskap.

                    Jeg vil gjøre mitt ytterste for å inspirere brukere og deg/kunder, med moderne og brukervennlig design og koder.

                    Mitt mål som designer er å skape trygghet, stabilt og ærlig miljø. Besitter en kombinasjon av teknisk og visuell kompetanse, brukerorienterte løsninger for web- og mobile enheter til fingerspissene. Lage unike, moderne designer som passer til kundens målgruppe. Frontend Utvikler som fokuserer på organisert, elegant og effektiv kode.</p>
            </div>
        </motion.div>
    )
}

export default About