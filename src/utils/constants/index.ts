export const NAVIGATIONS = [
  { href: "#about", label: "ABOUT" },
  { href: "#experience", label: "EXPERIENCE" },
  { href: "#projects", label: "PROJECTS" },
];

export const JOBS = [
  {
    id: 1,
    title: "",
    company: "Codify Lab",
    link: "https://dev.codifylab.com/",
    startDate: "May 2024",
    endDate: "Present",
    description:
      "Developed and supported projects using JavaScript, React, Next.js, Svelte, Redux, Zustand, SWR, and Bootstrap. Created 6 educational courses for the “go.codifylab.com” platform, improving website performance to 100% and accessibility to 95% through code and image optimization. Collected customer feedback to enhance products and implemented new features for platforms such as virtualaccelerate.com, codifylab.com, letscodify.io, and startupnation.asia. Designed and developed interactive features, including dynamic sliders, FAQ accordions, Yandex Maps integration, and Instagram post embeds. Built a multi-file code editor with live preview and robust form validation, including phone number masking. Optimized platforms by fixing bugs, adding new features, and improving the user experience. Additionally, developed admin tools like a file management library and breadcrumb navigation systems to enhance usability.",
  },
  {
    id: 2,
    title: "",
    company: "Freelance",
    link: null,
    startDate: "Jan 2023",
    endDate: "Present",
    description:
      "Developed custom landing pages and web applications with a focus on performance, responsiveness, and user-centric design. Managed projects from concept to deployment, including coding, optimization, and backend integration. Implemented secure login and registration features with SMS authentication, enhancing accessibility. Designed and built admin panels with CRUD operations, user-friendly forms, and media upload functionality. Improved user experience by optimizing introductory pages, creating order fulfillment tracking systems, and proactively resolving bugs. Developed dynamic pages for managing records, jobs, news, reviews, and categories with robust editing capabilities. Continuously enhanced platforms based on client feedback, adding features to align with business goals and improve usability.",
  },
  {
    id: 3,
    title: "",
    company: "Peaksoft House",
    link: "https://www.instagram.com/peaksoft.house/",
    startDate: "Jan 2023",
    endDate: "Apr 2024",
    description:
      "Developed and delivered projects such as Gadgetarium, Bilingual, AirBNB, Health Check, and peaksoft.house using JavaScript, TypeScript, React, Next.js, Redux, and Material UI. Created and maintained landing pages and other projects, ensuring alignment with business goals and client requirements. Built secure authentication systems with Google sign-in and implemented dynamic features like shopping carts, filtering, and interactive UI components. Designed an Excel and PDF management system for appointment tracking and integrated the Google Maps API for location-based services. Improved platform performance and user experience by implementing animations with Framer Motion and optimizing functionality. Taught HTML, CSS, JavaScript, and React to students across all skill levels, fostering a positive learning environment and encouraging collaboration. Designed and enhanced instructional materials in collaboration with colleagues. Designed and implemented fully responsive frontend architectures with Stripe integration for secure online payments, ensuring seamless user experiences. Proactively contributed to a collaborative team environment and actively supported professional growth.",
  },
];

export const PROJECTS = [
  {
    id: 1,
    image: "/images/go.png",
    title: "Codify GO",
    link: "https://go.codifylab.com/",
    description:
      "Education platform with courses in HTML, CSS, cybersecurity and digital literacy that uses microlearning and gamification for effective learning.",
    tools: ["Next", "JavaScript", "Bootstrap", "SCSS", "Zustand"],
  },
  {
    id: 2,
    image: "/images/va.png",
    title: "Virtual Accelerate",
    link: "https://www.virtualaccelerate.com/",
    description:
      "Adaptive platform for automating the entire process of participation in accelerator and incubation programs: from application to investment. The goal of the product is to simplify the interaction between participating startups, organizers and investors.",
    tools: ["Next", "React", "JavaScript", "SCSS", "Redux"],
  },
  {
    id: 3,
    image: "/images/job.png",
    title: "Job Codify",
    link: "https://letscodify.io/",
    description:
      "A job search and career platform that helps with creating cover letters and enhancing resumes with AI, and supports exploring career paths. You can post job openings, train users through courses, and share information about upcoming events.",
    tools: ["Next", "JavaScript", "Bootstrap", "SCSS", "Zustand"],
  },
  {
    id: 4,
    image: "/images/alpha.png",
    title: "Alpha Cargo",
    link: "https://www.alpha-cargo.kg/",
    description:
      "Platform for logistics and cargo delivery from Kyrgyzstan to Russia, offering services for private and business customers, including costing, parcel tracking, full-field and storage services, as well as support for legal shipments and franchises.",
    tools: [
      "React",
      "TypeScript",
      "Styled-Components",
      "SASS",
      "Redux-Toolkit",
    ],
  },
];

export const ALL_PROJECTS = [
  {
    id: 1,
    year: "2024",
    name: "Alpha Cargo",
    link: "https://www.alpha-cargo.kg/",
    tools: [
      "React",
      "TypeScript",
      "Styled-Components",
      "SASS",
      "Redux-Toolkit",
    ],
    description:
      "Transportation site providing cargo transportation, warehousing, and logistics services.",
    made: "Freelance",
  },
  {
    id: 2,
    year: "2024",
    name: "Codify GO",
    link: "https://go.codifylab.com/",
    tools: ["Next.js", "JavaScript", "SCSS", "Bootstrap", "Zustand"],
    description:
      "Educational platform offering courses in HTML, CSS, cybersecurity, and digital literacy.",
    made: "Codify Lab",
  },
  {
    id: 3,
    year: "2024",
    name: "Codify Academy",
    link: "https://www.codifylab.com/",
    tools: ["Svelte", "JavaScript", "CSS"],
    description:
      "Website for programming, design, and management courses for children and adults.",
    made: "Codify Lab",
  },
  {
    id: 4,
    year: "2024",
    name: "Codify Lab",
    link: "https://dev.codifylab.com/",
    tools: ["Next.js", "JavaScript", "Module CSS"],
    description:
      "Website providing information about IT services and development processes.",
    made: "Codify Lab",
  },
  {
    id: 5,
    year: "2024",
    name: "Codify Teens",
    link: "https://teens.codifylab.com/",
    tools: ["Next.js", "TypeScript", "Tailwind CSS"],
    description:
      "Website for a programming academy for children and teens with an application form.",
    made: "Codify Lab",
  },
  {
    id: 6,
    year: "2024",
    name: "Job Codify",
    link: "https://letscodify.io/",
    tools: ["Next.js", "JavaScript", "SCSS", "Redux Toolkit", "Zustand"],
    description:
      "Job search platform with AI assistance for cover letters and resumes.",
    made: "Codify Lab",
  },
  {
    id: 7,
    year: "2024",
    name: "Startup Nation",
    link: "https://www.startupnation.asia/",
    tools: ["Next.js", "JavaScript", "Bootstrap"],
    description:
      "Landing page for Central Asia’s largest hackathon with registration and event details.",
    made: "Codify Lab",
  },
  {
    id: 8,
    year: "2024",
    name: "Virtual Accelerate",
    link: "https://www.virtualaccelerate.com/",
    tools: ["React", "Next.js", "JavaScript", "SCSS", "Bootstrap", "Redux"],
    description:
      "Platform for automating accelerator and incubation program participation.",
    made: "Codify Lab",
  },
  {
    id: 9,
    year: "2024",
    name: "Shine",
    link: "https://shinebeautyclinic.kg/",
    tools: ["Next.js", "TypeScript", "Tailwind CSS", "RTK Query"],
    description:
      "Website for a plastic surgery clinic with admin panel and CRUD functionalities.",
    made: "Freelance",
  },
  {
    id: 10,
    year: "2023",
    name: "Peaksoft House",
    link: "https://peaksoft.house/",
    tools: ["Next.js", "JavaScript", "Module CSS"],
    description:
      "Course website allowing users to view, register for courses, and explore student projects.",
    made: "Peaksoft House",
  },
  {
    id: 11,
    year: "2023",
    name: "Bilingual",
    link: null,
    tools: ["React", "JavaScript", "MUI", "Styled-Components"],
    description:
      "Language test website with animations, voice assessment, and anti-cheat mechanisms.",
    made: "Peaksoft House",
  },
  {
    id: 12,
    year: "2023",
    name: "AirBNB Kyrgyzstan",
    link: null,
    tools: ["React", "JavaScript", "MUI", "Styled-Components"],
    description:
      "Platform for renting and selling accommodation with Google sign-in and feedback features.",
    made: "Peaksoft House",
  },
  {
    id: 13,
    year: "2023",
    name: "HealthCheck",
    link: null,
    tools: ["React", "JavaScript", "MUI", "Styled-Components"],
    description:
      "Medical platform offering online appointment booking and access to test results.",
    made: "Peaksoft House",
  },
  {
    id: 14,
    year: "2023",
    name: "Gadgetarium",
    link: null,
    tools: ["React", "JavaScript", "MUI", "Styled-Components"],
    description:
      "Online store for gadgets with shopping cart, order management, and secure payment.",
    made: "Peaksoft House",
  },
];
