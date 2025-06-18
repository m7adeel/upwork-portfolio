'use client';

import { getSectionAnimation } from '@/styles/animations';
import { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@iconify/react';
import featuredProjectsSection from '@/lib/content/featured-projects';
import { projectsSection } from '@/lib/content/projects';
import dynamic from 'next/dynamic';

const Layout = dynamic(() => import('@/containers/layout/Layout'), { ssr: false });
const Wrapper = dynamic(() => import('@/components/ui/Wrapper'), { ssr: false });

const metadata: Metadata = {
  title: 'Archives | Muhammad Adeel',
  description: 'Archive of all my projects and work throughout the years.',
};

const ArchivesPage = () => {
  const projects = [
    ...featuredProjectsSection.projects,
    ...projectsSection.projects
  ]

  return (
    <Layout>
      <Wrapper {...getSectionAnimation}>
        <div className="max-w-4xl mx-auto">
          <h1 className="heading-secondary mb-8">Archives</h1>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left border-b border-bg-secondary">
                  <th className="py-4 px-4 font-mono text-sm text-dark-2">Year</th>
                  <th className="py-4 px-4 font-mono text-sm text-dark-2">Project</th>
                  <th className="py-4 px-4 font-mono text-sm text-dark-2">Made with</th>
                  <th className="py-4 px-4 font-mono text-sm text-dark-2">Links</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => (
                  <tr 
                    key={project.id} 
                    className="border-b border-bg-secondary hover:bg-bg-secondary/30 transition-colors"
                  >
                    <td className="py-4 px-4 font-mono text-sm text-dark-3">
                      {project.year}
                    </td>
                    <td className="py-4 px-4 font-semibold">
                      {project.name}
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-2 flex-wrap">
                        {project.projectSkills?.slice(0, 3).map((skill) => (
                          <span 
                            key={skill.name}
                            className="inline-flex items-center gap-1 text-xs font-mono text-dark-2"
                          >
                            <Icon icon={skill.icon} className="w-4 h-4" />
                            {skill.name}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex gap-3">
                        {project.url && (
                          <Link 
                            href={project.url}
                            target="_blank"
                            className="text-dark-2 hover:text-accent transition-colors"
                            aria-label={`Visit ${project.name}`}
                          >
                            <Icon icon="ph:link-bold" className="w-5 h-5" />
                          </Link>
                        )}
                        {project.repo && (
                          <Link 
                            href={project.repo}
                            target="_blank"
                            className="text-dark-2 hover:text-accent transition-colors"
                            aria-label={`View ${project.name} source code`}
                          >
                            <Icon icon="mdi:github" className="w-5 h-5" />
                          </Link>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default ArchivesPage; 