export const featuredProjects = [
  {
    id: 'healthcare-sms',
    title: 'Healthcare Service Management System',
    type: 'Web App',
    year: '2026',
     description:
      'A healthcare platform where users can register as patients, browse doctors, and book appointments online, with separate role-based experiences for doctors and admins.',
    points: [
      'Implemented secure JWT-based authentication with Spring Security and role-based access control, so patients, doctors and admins each only reach what they are allowed to.',
      'Owned the project end to end: REST APIs and MySQL data model with Hibernate/JPA, the React frontend, and admin tools for managing users, roles and doctors.',
      'Containerised the backend with Docker and deployed it across Render, Aiven MySQL and Vercel, handling CORS and production environment configuration.',
    ],
    links: {
      live: 'https://healthcare-services-frontend.vercel.app',
      frontendRepo: 'https://github.com/aniketthakre02/healthcareServices-frontend',
      backendRepo: 'https://github.com/aniketthakre02/HealthcareServices',
    },
  },
]

export const moreProjects = [
  {
    id: 'social-media',
    title: 'Social Media App',
    type: 'Frontend',
    year: '2024',
    description:
      'A frontend-only social feed built in React — users can log in, view posts, and interact through likes and comments, with all state managed client-side.',
    tags: ['React'],
    links: {
      live: 'https://willowy-alfajores-9480df.netlify.app',
      repo: 'https://github.com/aniketthakre02/Social_media_app',
    },
  },
  {
    id: 'sciastra-chatbot',
    title: 'SciAstra Chatbot',
    type: 'Mini Project',
    year: '2024',
    description:
      'A rule-based FAQ chatbot for SciAstra that matches user questions to predefined answers — no LLM involved, built to practice conversational UI patterns.',
    tags: ['JavaScript'],
    links: {
      live: 'https://incomparable-croissant-82729b.netlify.app',
      repo: 'https://github.com/aniketthakre02/mychatbot',
    },
  },
]