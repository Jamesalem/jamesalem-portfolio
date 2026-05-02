import { Project } from '@/types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'CareSynC',
    description: 'Healthcare management platform for patient care coordination',
    problem: 'Healthcare providers struggled with fragmented patient data and poor care coordination',
    solution: 'Built a comprehensive platform integrating patient records, appointments, and care workflows',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    githubUrl: 'https://github.com/jamesalem/caresync',
    liveUrl: 'https://caresync.example.com',
  },
  {
    id: '2',
    title: 'SEO Audit Tool',
    description: 'Automated website SEO analysis and optimization recommendations',
    problem: 'Small businesses lacked access to expensive SEO tools',
    solution: 'Developed an affordable SaaS tool with automated SEO recommendations',
    technologies: ['React', 'Node.js', 'MongoDB', 'Puppeteer'],
    githubUrl: 'https://github.com/jamesalem/seo-audit-tool',
    liveUrl: 'https://seo-audit-tool.example.com',
  },
  {
    id: '3',
    title: 'CBTPracticon',
    description: 'Socio-educational SaaS platform for web and mobile enabling real-time computer-based testing and collaborative learning',
    problem: 'Learners needed an engaging, interactive platform to practice real-time computer-based tests with peer collaboration and instant feedback',
    solution: 'Built a comprehensive socio-educational platform featuring real-time CBT practice sessions, integrated chat functionality, progress tracking, and cross-platform support (web and mobile)',
    technologies: ['Node.js', 'JavaScript', 'PostgreSQL', 'Tailwind CSS', 'React'],
    githubUrl: 'https://github.com/jamesalem/cbtpracticon',
    liveUrl: 'https://cbtpracticon.example.com',
  },
];
