import { HeroSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const heroSection: HeroSectionType = {
  subtitle: 'Hello, I’m',
  title: 'Muhammad Adeel',
  tagline: ['Android Developer', 'iOS Developer', 'Full Stack Developer'],
  description:
    'Experienced Software Engineer with 2.5+ years in cross-platform app development, specializing in scalable, high-performance solutions. Passionate about solving complex problems, optimizing performance, and driving innovation in software development.',
  specialText:
    'Building Projects that make a difference, one line of code at a time.',
  ctas: [
    {
      title: 'View My Resume',
      url: `/${resumeFileName}`,
      hideInDesktop: true,
      sameTab: false,
    },
    {
      title: 'Check Out My Projects',
      url: `/#projects`,
      hideInMobile: true,
      sameTab: true,
    },
    {
      title: 'Hire Me',
      url: `/#contact`,
      sameTab: true,
    }
  ],
};
