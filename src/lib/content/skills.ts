import { SkillsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

export const skillsSection: SkillsSectionType = {
  title: 'Where i Make Difference',
  skills: [
    {
      id: getId(),
      title: 'Mobile App Development',
      lottie: {
        light: '/lotties/frontend.json',
        dark: '/lotties/frontend-dark.json',
      },
      points: [
        'Developing high-performance cross-platform mobile applications',
        'Building native Android and iOS apps with seamless user experiences',
        'Designing interactive, modern, and visually stunning user interfaces',
      ],
      projectSkills: [
        { name: 'Flutter', icon: 'vscode-icons:file-type-flutter' },
        { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
        { name: 'Swift', icon: 'vscode-icons:file-type-swift' },
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'JavaScript', icon: 'vscode-icons:file-type-js-official' },
        { name: 'TypeScript', icon: 'skill-icons:typescript' },
        { name: 'Dart', icon: 'vscode-icons:file-type-dartlang' },
        { name: 'Python', icon: 'vscode-icons:file-type-python' },
        { name: 'Node.js', icon: 'logos:nodejs-icon' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'React', icon: 'logos:react' },
        { name: 'Next.js', icon: 'vscode-icons:file-type-next' },
        { name: 'CSS-3', icon: 'vscode-icons:file-type-css' },
        { name: 'MySQL', icon: 'vscode-icons:file-type-sql' },
        { name: 'MongoDB', icon: 'vscode-icons:file-type-mongo' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Supabase', icon: 'skill-icons:supabase-dark' },
        { name: 'Vercel', icon: 'vscode-icons:file-type-vercel' },
      ],
    }
  ],
};
