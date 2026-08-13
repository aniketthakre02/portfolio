import {
  SiJavascript, SiHtml5, SiCss, SiMysql,
  SiSpring, SiHibernate, SiJsonwebtokens,
  SiReact, SiRedux, SiTypescript, SiTailwindcss, SiBootstrap,
  SiMongodb, SiDocker, SiRender, SiRedis, SiApachekafka,
  SiGit, SiGithub, SiApachemaven, SiPostman,
  SiIntellijidea, SiGithubcopilot,
} from 'react-icons/si'
import { LuNetwork, LuBinary, LuBoxes, LuWorkflow, LuShieldCheck, LuCoffee, LuCode } from 'react-icons/lu'

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Java', icon: LuCoffee, color: '#ED8B00', neutral: true },,
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
      { name: 'HTML', icon: SiHtml5, color: '#E34F26' },
      { name: 'CSS', icon: SiCss, color: '#1572B6' },,
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'Spring Security', icon: SiSpring, color: '#6DB33F' },
      { name: 'Spring MVC', icon: SiSpring, color: '#6DB33F' },
      { name: 'Hibernate / JPA', icon: SiHibernate, color: '#BCAE79' },
      { name: 'REST APIs', icon: LuNetwork, color: '#98978F', neutral: true },
      { name: 'JWT', icon: SiJsonwebtokens, color: '#D63AFF' },
      { name: 'Microservices', icon: LuNetwork, color: '#98978F', neutral: true },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux.js', icon: SiRedux, color: '#764ABC' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
      { name: 'Bootstrap', icon: SiBootstrap, color: '#7952B3' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ],
  },
  {
    id: 'devops',
    label: 'DevOps & Messaging',
    skills: [
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      { name: 'Render', icon: SiRender, color: '#46E3B7' },
      { name: 'Redis', icon: SiRedis, color: '#DC382D' },
      { name: 'Apache Kafka', icon: SiApachekafka, color: '#231F20' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'GitHub', icon: SiGithub, color: '#F4F3EF' },
      { name: 'Maven', icon: SiApachemaven, color: '#C71A36' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    skills: [
      { name: 'IntelliJ IDEA', icon: SiIntellijidea, color: '#000000', bgLight: true },
      { name: 'VS Code', icon: LuCode, color: '#007ACC', neutral: true },
      { name: 'GitHub Copilot', icon: SiGithubcopilot, color: '#F4F3EF' },
    ],
  },
  {
    id: 'fundamentals',
    label: 'CS Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', icon: LuBinary, color: '#98978F', neutral: true },
      { name: 'OOP', icon: LuBoxes, color: '#98978F', neutral: true },
      { name: 'SDLC', icon: LuWorkflow, color: '#98978F', neutral: true },
      { name: 'Role-Based Access Control', icon: LuShieldCheck, color: '#98978F', neutral: true },
    ],
  },
]