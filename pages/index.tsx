import type { NextPage } from "next";
import Head from 'next/head';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Feedback from "@/components/Feedback";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from 'next/link';

const Home: NextPage = ()  => {
  return (
    <>
      <Head>
        <title>Portfolio Website</title>
       
      </Head>
      <div className="bg-[#00010D] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#8C4D16]">
     {/** Header */}
     <Header />
     
     {/** Hero */}
     <section id="hero" className='snap-start'>  
     <Hero />
     </section>

     {/** About */}
     <section id="about" className='snap-center'>
     <About />
     </section>

     {/** Feedback */}
     <section id="feedback" className='snap-center'>
     <Feedback />
     </section>

     {/* Projects */ }
     <section id="projects" className="snap-start">
     <Projects />
     </section>


     {/** Contakt */}
     <section id="contact" className='snap-start'>
     <ContactMe />
     </section>

     <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <p className='text-center justify-center h-10 w-10 rounded-full bg-[#CC8D3B] text-white text-xs'></p>

            
          </div>
          
        </footer>
        </Link>
     </div>
    </>
  );
};

export default Home;
