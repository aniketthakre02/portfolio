import {
  SiJavascript, SiTypescript, SiMysql, SiMongodb,
  SiSpring, SiHibernate,
  SiReact, SiRedux, SiTailwindcss,
  SiDocker, SiApachekafka, SiGit, SiPostman,
} from 'react-icons/si'
import { LuCoffee, LuNetwork, LuWorkflow, LuBinary, LuBoxes } from 'react-icons/lu'

export const skillCategories = [
  {
    id: 'languages',
    label: 'Languages',
    skills: [
      { name: 'Java', icon: LuCoffee, color: '#ED8B00', neutral: true },
      { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E' },
      { name: 'SQL', icon: SiMysql, color: '#4479A1' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      { name: 'Spring Boot', icon: SiSpring, color: '#6DB33F' },
      { name: 'Spring Security', icon: SiSpring, color: '#6DB33F' },
      { name: 'Hibernate / JPA', icon: SiHibernate, color: '#BCAE79' },
      { name: 'REST APIs', icon: LuNetwork, color: '#98978F', neutral: true },
      { name: 'Microservices', icon: LuWorkflow, color: '#98978F', neutral: true },
    ],
  },
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      { name: 'React.js', icon: SiReact, color: '#61DAFB' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38BDF8' },
    ],
  },
  {
    id: 'data-devops',
    label: 'Data & DevOps',
    skills: [
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'Docker', icon: SiDocker, color: '#2496ED' },
      // { name: 'Apache Kafka', icon: SiApachekafka, color: '#F4F3EF' },
      { name: 'Git', icon: SiGit, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ],
  },
  {
    id: 'fundamentals',
    label: 'Fundamentals',
    skills: [
      { name: 'Data Structures & Algorithms', icon: LuBinary, color: '#98978F', neutral: true },
      // { name: 'OOP', icon: LuBoxes, color: '#98978F', neutral: true },
      { name: 'Computer Networks', icon: LuBoxes, color: '#98978F', neutral: true },
    ],
  },
]