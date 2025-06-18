import { NavbarSectionType } from '@/lib/types/sections';
import { resumeFileName } from '@/lib/utils/config';

export const navbarSection: NavbarSectionType = {
    navLinks: [
        { name: 'about', url: '/#about', isPageUrl: false },
        { name: 'experience', url: '/#experience', isPageUrl: false},
    ],
    cta: {
        title: 'resume',
        url: `/${resumeFileName}`,
        sameTab: false,
    },
}