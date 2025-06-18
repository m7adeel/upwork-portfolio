import { StaticImageData } from "next/image";

export type NavLinkType = {
  name: string;
  url: string;
  isPageUrl: boolean;
};

export type SocialLinkType = {
  icon: string;
  url: string;
};

export type CTAType = {
  title: string;
  url: string;
  sameTab?: boolean;
};

// env
export type ExperienceType = {
  role: string;
  company: string;
  companyUrl: string;
  started: Date | string;
  upto: Date | 'present' | string;
  tasks: string[];
  tags: string[];
};

export type ProjectType = {
  id: string;
  name: string;
  url: string;
  backendUrl?: string;
  year: number;
  img: string | StaticImageData;
  repo: string;
  demos: {
    title: string;
    image: string;
    description?: string;
  }[];
  showOnLanding?: boolean;
  projectSkills: SkillType[];
  description: string;
};

export type Blog = {
  id: string,
  title: string,
  description?: string,
  url: string,
  date: string,
  categories: string[]
}

export interface FeaturedProjectType
  extends Omit<ProjectType, 'year' | 'repo'> {
  description: string;
  repo?: string;
  year?: string;
  tasks?: string;
}

export type StringKeyValueType = {
  [link: string]: string;
};

export type Direction = 'up' | 'right' | 'down' | 'left';

export type SkillType = { name: string; icon: string };

export type BreakpointType = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
