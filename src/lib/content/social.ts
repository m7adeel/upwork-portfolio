import { socialLinks } from '@/lib/content/portfolio';
import { SocialSectionType } from '@/lib/types/sections';


export const socialSection: SocialSectionType = {
    socialLinks: [
    {
        icon: 'tabler:brand-github',
        url: socialLinks.github,
    },
    {
        icon: 'cib:upwork',
        url: socialLinks.upwork,
    },
    ],
};