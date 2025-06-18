import { ProjectsSectionType } from '@/lib/types/sections';
import { getId } from '@/lib/utils/helper';

import BookAppImage from '../../../public/images/projects/BookApp.webp'
import QuranChatImage from '../../../public/images/projects/QuranChat.png'
import MockacinnoImage from '../../../public/images/projects/Mockacinno.png'
import VueDashboardImage from '../../../public/images/projects/VueDashboard.png'
import TravelTalesImage from '../../../public/images/projects/TravelTales.png'
import VeteranMeetImage from '../../../public/images/projects/VeteranMeet.png'

export const projectsSection: ProjectsSectionType = {
  title: 'Projects Showcase',
  projects: [
    {
      id: getId(),
      name: 'Mockacinno',
      url: '',
      repo: 'https://github.com/m7adeel/Mockacinno',
      img: MockacinnoImage,
      demos: [
        {
          title: 'Mockacinno - Quick Demo',
          image: 'https://youtube.com/shorts/Msjv06sZBIU?feature=share',
          description: 'A short walk through of the app, showcasing its main features and functionalities.'
        },
      ],
      showOnLanding: true,
      year: 2025,
      description: "Mockacinno is a mobile-first app built with React Native and Firebase that connects professionals for referral exchanges and mock interviews. It features secure authentication, smart onboarding, real-time chat, and personalized filters to help users grow their careers through skill enhancement and networking.",
      projectSkills: [
        { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'Expo', icon: 'vscode-icons:file-type-light-expo' },
      ],
    },
    {
      id: getId(),
      name: 'QuranChat AI',
      url: '',
      repo: 'https://github.com/m7adeel/QuranChat-AI',
      img: QuranChatImage,
      demos: [
        {
          title: 'QuranChat AI - Google Auth Demo',
          image: 'https://youtube.com/shorts/tPi45usVIxs?feature=share',
          description: 'A short video demonstrating the google authentication process in QuranChat AI.'
        },
        {
          title: 'QuranChat AI - App Lock Demo',
          image: 'https://youtube.com/shorts/bgU1ocuoEvw?feature=share',
          description: 'A short video demonstrating the app lock feature in QuranChat AI.'
        },
      ],
      showOnLanding: true,
      year: 2025,
      description: "QuranChat AI is a cross-platform mobile app built with React Native that offers an AI-powered Islamic chatbot.\n\nKey Features:\n🤖 AI-powered Islamic chatbot\n📖 Based on authentic Quran and Hadith sources\n🎯 Interactive onboarding experience\n💳 Subscription-based access\n📱 Daily Hadith/Quran verse widget\n🌙 Beautiful Islamic-themed UI\n🔒 Secure authentication\n📊 User preferences and settings\n🎨 Customizable themes and appearance\n🔔 Push notifications for daily verses\n📝 Voice-to-text input support\n🌍 Multi-language support",
      projectSkills: [
        { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'Expo', icon: 'vscode-icons:file-type-light-expo' },
      ],
    },
    {
      id: getId(),
      name: 'Book App',
      url: '',
      repo: 'https://github.com/m7adeel/BookApp',
      img: BookAppImage,
      demos: [
        {
          title: 'Book App Demo 1',
          image: 'https://youtube.com/shorts/ggai0_qA0ao?feature=share',
          description: 'A short video demonstrating the main features of the Book App.'
        },
        {
          title: 'Book App Demo 2',
          image: 'https://youtube.com/shorts/SSiMUXZqWMQ?feature=share',
          description: 'Another video showing additional functionality.'
        }
      ],
      showOnLanding: true,
      year: 2025,
      description: "A dynamic educational mobile app built with Expo and React Native, offering an engaging learning experience through structured chapters, exercises, and interactive features.\n\nKey Features\n✅ 33 Interactive Chapters – Covering diverse topics\n✅ Engaging Exercises – MCQs, matching, fill-in-the-blanks, and more\n✅ Word Lookup System – Dictionary & Google Translate API integration\n✅ Audio Support – Pronunciations via Expo Audio API\n✅ Bilingual Support – English & Bengali\n✅ Offline-First & Responsive – Works across devices",
      projectSkills: [
        { name: 'React Native', icon: 'vscode-icons:file-type-reactts' },
        { name: 'Tailwind', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Typescript', icon: 'vscode-icons:file-type-typescript-official' },
        { name: 'Expo', icon: 'vscode-icons:file-type-light-expo' },
      ],
    },
    {
      id: getId(),
      name: 'Travel Tales',
      url: '',
      repo: 'https://github.com/m7adeel/TravelTales',
      img: TravelTalesImage,
      showOnLanding: true,
      year: 2024,
      projectSkills: [
        { name: 'Kotlin', icon: 'vscode-icons:file-type-kotlin' },
        { name: 'Firebase', icon: 'vscode-icons:file-type-firebase' },
        { name: 'MySql', icon: 'logos:mysql' },
        { name: 'Sqlite', icon: 'devicon:sqlite' },
        { name:'Google Maps', icon: 'logos:google-maps' },
        { name: 'Android', icon: 'material-icon-theme:android' },
      ],
      demos: [],
      description: 'A Mobile Application for Travelers to share their experiences with each other in the form of blogs'
    },
    {
      id: getId(),
      name: 'Vue Dashboard',
      url: '',
      repo: 'https://github.com/m7adeel/Vue-Dashboard',
      img: VueDashboardImage,
      showOnLanding: true,
      year: 2024,
      projectSkills: [
        { name: 'Vue.js', icon: 'vscode-icons:file-type-vue' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Chart.js', icon: 'devicon:chartjs' },
        { name: 'D3.js', icon: 'devicon:d3js' },
      ],
      demos: [
        {
          title: 'Vue Dashboard Features Overview',
          image: 'https://www.youtube.com/embed/7qvKFlxyDek',
          description: 'A short video showcasing the Vue.js dashboard application, highlighting its features and user interface.'
        },
        {
          title: 'Vue Dashboard Company Analysis Part 1',
          image: 'https://www.youtube.com/embed/4EZX2zxLUII',
          description: 'Company analysis part 1 of the Vue.js dashboard application, demonstrating using charts and tables to visualize data.'
        },
        {
          title: 'Vue Dashboard Company Analysis Part 2 (Final Results)',
          image: 'https://www.youtube.com/embed/RMzDGnvlQdM',
          description: 'Company analysis part 2 of the Vue.js dashboard application, after completing the company analysis dashboard, showcasing the final results and insights.'
        }
      ],
      description: 'A Vue.js dashboard application that provides a user-friendly interface for creating dynamic dashboards. It includes features such as charts, tables, and responsive design to enhance user experience.\n\nKey Features:\n- Interactive charts and graphs using Chart.js and D3.js\n- Responsive design for various screen sizes\n- User-friendly interface for creating and managing dashboards\n- Integration with Vue.js for dynamic data handling\n- Tailwind CSS for modern styling and layout'
    },
    {
      id: getId(),
      name: 'Veteran Meet',
      url: '',
      backendUrl: '',
      repo: 'https://github.com/m7adeel/SE_veteran_meet',
      img: VeteranMeetImage,
      showOnLanding: true,
      year: 2024,
      projectSkills: [
        { name: 'React', icon: 'logos:react' },
        { name: 'Tailwind CSS', icon: 'vscode-icons:file-type-tailwind' },
        { name: 'Express.js', icon: 'skill-icons:expressjs-light' },
      ],
      demos: [],
      description: 'A web application designed to connect veterans with each other and provide a platform for sharing experiences, resources, and support. The app features user authentication, profile management, and a forum for discussions.\n\nKey Features:\n✅ User authentication and profile management\n✅ Forum for discussions and sharing experiences\n✅ Resource sharing for veterans\n✅ Event management for veteran meetups',
    },
  ],
};
