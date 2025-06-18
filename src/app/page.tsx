import type { Metadata } from 'next';
import type { NextPage } from 'next';

import dynamic from 'next/dynamic';

// dynamically import all the components with no SSR

const About = dynamic(() => import('@/containers/About'), { ssr: false });
const Contact = dynamic(() => import('@/containers/Contact'), { ssr: false });
const Experience = dynamic(() => import('@/containers/Experience'), { ssr: false });
const FeaturedProjects = dynamic(() => import('@/containers/FeaturedProjects'), { ssr: false });
const Hero = dynamic(() => import('@/containers/Hero'), { ssr: false });
const Layout = dynamic(() => import('@/containers/layout/Layout'), { ssr: false });
const Skills = dynamic(() => import('@/containers/Skills'), { ssr: false });
const Projects = dynamic(() => import('@/containers/Projects'), { ssr: false });



export const metadata: Metadata = {
  robots: { index: true, follow: true },
  other: {
    "google-site-verification": "tuEELxkE7zuw6YSzuesy_71LuYE_C22T0qurgD-mFFg",
  },
};

const Home: NextPage = () => {
  return (
    <>
      <Layout>
        <Hero />
        <About />
        {/* <FeaturedProjects /> */}
        {/* <Skills /> */}
        <Projects />
        <Experience />
        <Contact />
      </Layout>
    </>
  );
};

export default Home;
