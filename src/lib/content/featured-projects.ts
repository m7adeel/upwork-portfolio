import { FeaturedProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

async function getFeaturedProjects() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/featuredProjects`);
  
  if (!res.ok) {
    throw new Error('Failed to fetch projects');
  }
 
  return res.json();
}

const featuredProjectsSection: FeaturedProjectsSectionType = {
  title: "Featured Projects",
  projects: [
    {
      id: getId(),
      name: 'FarmFresh Delivery',
      description: 'Online Platform to Order Fresh Food',
      tasks: 'An online platform that connects local farmers with consumers, allowing users to order fresh produce directly from the source. The app provides a user-friendly interface for browsing products, placing orders, and tracking deliveries.',
      url: '',
      repo: 'https://github.com/m7adeel/FarmFresh',
      img: 'https://i.postimg.cc/ZmjNmrk4/colorblendr.png',
      projectSkills: [
        { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
        { name: 'Supabase', icon: 'devicon:supabase' },
        { name: 'Expo', icon: 'vscode-icons:file-type-light-expo' },
        { name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
      ],
      demos: []
    },
    {
      id: getId(),
      name: 'Xpensely',
      description: 'AI Powered Expense tracker app',
      tasks: 'An expense tracker app that helps users manage their finances by tracking income and expenses. It provides a user-friendly interface for adding, editing, and deleting transactions, as well as generating reports and visualizations.',
      url: '',
      repo: 'https://github.com/m7adeel/Xpensely',
      img: 'https://i.postimg.cc/VzTtxw2M/iconify.png',
      projectSkills: [
        { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
        { name: 'Expo', icon: 'vscode-icons:file-type-light-expo' },
        { name: 'Supabase', icon: 'devicon:supabase' },
        { name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
      ],
      demos: []
    },
    {
      id: getId(),
      name: 'SoundZing',
      description: '',
      tasks: '',
      url: '',
      repo: 'https://github.com/m7adeel/SoundZing-FE',
      backendUrl: 'https://github.com/m7adeel/SoundZing',
      img: 'https://i.postimg.cc/ZmjNmrk4/colorblendr.png',
      projectSkills: [
        { name: 'Flutter', icon: 'devicon:flutter' },
        { name: 'Flask', icon: 'vscode-icons:file-type-light-expo' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
      ],
      demos: []
    },
  ],
};

export default featuredProjectsSection;
