export const featuredProjects = [
  {
    id: 'healthcare-sms',
    title: 'Healthcare Service Management System',
    type: 'Web App',
    year: '2026',
    description:
      'A full-stack platform for patients, doctors and admins — role-based access, appointment booking, and a production deployment spread across three separate providers.',
    points: [
      'Built JWT-based authentication with role-based access control across patient, doctor and admin roles, using a custom AuthContext with a loading guard to prevent auth-state race conditions.',
      'Migrated the backend from a decommissioned Railway instance to a Docker + Render stack with a fresh Aiven MySQL database, debugging platform-specific issues along the way (Hibernate constraint mismatches, stale environment variables, CORS).',
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