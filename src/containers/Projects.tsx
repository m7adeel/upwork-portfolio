'use client';
import { PROJECTS_INITIALLY } from '@/lib/utils/config';
import { Button, ProjectCard, Wrapper } from '@/components';
import { getSectionAnimation, projectVariants } from '@/styles/animations';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProjectType } from '@/lib/types';
import { projectsSection } from '@/lib/content/projects';

const Projects = () => {
  const title = projectsSection.title;
  const projects = projectsSection.projects;
  const [showMore, setShowMore] = useState(false);

  const topProjects = projects.slice(0, PROJECTS_INITIALLY);
  const visibleProjects = showMore ? projects : topProjects;

  if(!projects.length) return (<></>)

  return (
    <Wrapper animate={false} {...getSectionAnimation}>
      <div className='flex flex-row items-center justify-between mb-12'>
        <motion.h2 className="heading-secondary !mb-0">{ title }</motion.h2>
        <Link
          href="/archives"
          className="text-accent hover:text-accent-variant transition-colors duration-300 font-mono text-sm"
        >
          Show All →
        </Link>
      </div>

      <div className="grid gap-6 grid-cols-auto-250 xs:grid-cols-auto-300 place-items-center">
        {visibleProjects.map((project, i) => {
          if (i < PROJECTS_INITIALLY) {
            return (
              <ProjectCard
                {...project}
                key={project.id}
                variants={projectVariants}
                initial="hidden"
                whileInView="show"
                custom={i}
                viewport={{ once: true }}
              />
            );
          }

          return (
            <ProjectCard
              {...project}
              key={project.id}
              variants={projectVariants}
              initial="hidden"
              animate="show"
              custom={i - PROJECTS_INITIALLY}
            />
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-4 mt-20">
        {projects.length > PROJECTS_INITIALLY && (
          <Button
            size="lg"
            className="rounded-full"
            onClick={() => setShowMore((prev) => !prev)}
          >
            {showMore ? 'show less' : 'show more'}
          </Button>
        )}
      </div>
    </Wrapper>
  );
};

export default Projects;
