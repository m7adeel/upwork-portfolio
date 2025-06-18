import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'about', url: '/#about', isPageUrl: false },
        { name: 'experience', url: '/#experience', isPageUrl: false},
        { name: 'contact', url: '/#contact', isPageUrl: false},
        { name: 'blog', url: '/blog', isPageUrl: true },
        { name: 'archives', url: '/archives', isPageUrl: true },
    ],
    cta: {
        title: 'resume',
        url: `/${resumeFileName}`,
        sameTab: false,
    },
}