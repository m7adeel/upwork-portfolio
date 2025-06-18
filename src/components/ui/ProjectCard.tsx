'use client';
import { ProjectType } from '@/lib/types';
import { blurImageURL, prefix } from '@/lib/utils/config';
import { getId } from '@/lib/utils/helper';

import { Icon } from '@iconify/react';
import { motion, MotionProps } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import ProjectSkillIcon from '../projects/ProjectSkillIcon';
import ProjectModal from './ProjectModal';

const ProjectCard = ({
  name,
  url,
  repo,
  demos,
  year,
  img,
  projectSkills,
  description,
  ...rest
}: ProjectType & MotionProps) => {
  // To avoid hydration failed error
  const [domLoaded, setDomLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setDomLoaded(true);
  }, []);

  return domLoaded ? (
    <motion.div {...rest} className="w-full max-w-[350px]">
      <button
        onClick={(e) => {
          if((demos && demos.length) || description) {
            setIsOpen(true)
            return
          }

          // Don't run this if the clicked target is an anchor element
          if ((e.target as HTMLElement).closest('a')) return;
          window.open(url, '_blank');
        }}
        className="block w-full rounded-md shadow-xl bg-bg-secondary dark:shadow-2xl hover:text-accent"
      >
        <div className="overflow-hidden h-[200px] rounded-t-md">
          <Image
            src={img}
            alt={name}
            width={300}
            height={300}
            placeholder="blur"
            blurDataURL={blurImageURL}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105 focus:scale-105"
          />
        </div>
        <div className="p-4 py-3 space-y-1 rounded-b-md">
          <div className="flex justify-between">
            <p className="font-mono text-xs capitalize">
              <div
                key={getId()}
                className="flex flex-wrap justify-items-start gap-2"
              >
                {projectSkills.map(({ name, icon }) => (
                  <ProjectSkillIcon key={getId()} src={icon} name={name} />
                ))}
              </div>
            </p>
            <div className="flex space-x-1.5 pt-[2px]">
              <a
                href={repo}
                className="block duration-200 text-text hover:text-accent rounded-sm"
                target="_blank"
              >
                <Icon icon="tabler:brand-github" width={20} height={20} />
              </a>
              <a
                href={url}
                className="block duration-200 text-text hover:text-accent rounded-sm"
                target="_blank"
              >
                <Icon icon="ci:external-link" width={22} height={22} />
              </a>
            </div>
          </div>
          <h4 className="flex justify-between font-medium capitalize transition-colors duration-200">
            <span>{name}</span>
            <span className="mr-1">{year}</span>
          </h4>
        </div>
      </button>

      {isOpen && (demos || description) && (
        <ProjectModal
          name={name}
          demos={demos}
          github={repo}
          live={url}
          description={description}
          techStack={projectSkills}
          onClose={() => setIsOpen(false)}
        />
      )}
    </motion.div>
  ) : (
    <></>
  );
};

export default ProjectCard;
