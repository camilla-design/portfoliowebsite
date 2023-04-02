import type { GetStaticProps } from "next";
import Head from 'next/head';
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Feedbacks from "../components/FeedbacksInformation";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import Link from 'next/link';
import { FeedbackInformation, PageInfo, Project, Technologies } from "@/typings";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchFeedbacks } from "@/utils/fetchFeedbacks";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchTechnologies } from "@/utils/fetchTechnologies";

type Props = {
  pageInfo: PageInfo;
  feedbackInfo: FeedbackInformation[];
  project: Project[];
  
}


const Home = ({pageInfo, feedbackInfo, project}: Props)  => {
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
     <Hero pageInfo={pageInfo}/>
     </section>

     {/** About */}
     <section id="about" className='snap-center'>
     <About pageInfo={pageInfo}  />
     </section>

     {/** Feedback */}
     <section id="feedback" className='snap-center'>
     <Feedbacks feedbackInfo={feedbackInfo} />
     </section>

     {/* Projects */ }
     <section id="projects" className="snap-start">
     <Projects project={project} />
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

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const feedbackInfo: FeedbackInformation[] = await fetchFeedbacks();
  const project: Project[] = await fetchProjects();
 


  return {
    props: {
      pageInfo,
      feedbackInfo,
      project,
   
    },
    revalidate: 10,
  }
}