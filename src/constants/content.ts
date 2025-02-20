import {
  ExperienceType,
  ExternalLink,
  NavbarMenuItem,
  Project,
  Skill,
} from "@/types";
import { SKILL_ICONS } from "./skill-icons";
import PortfolioImage from "@/assets/Prat_Portfolio.webp";
import OmniImage from "@/assets/Omni.webp";
import CNCImage from "@/assets/CNC.webp";

// Navigation

export const NAVBAR_MENU: NavbarMenuItem[] = [
  {
    label: "Home",
  },
  {
    label: "About",
  },
  {
    label: "Experience",
  },
  {
    label: "Skills",
  },
  {
    label: "Projects",
  },
];

// Home Section
export const HOME_CONTENT = {
  name: "Pratik Desai",
  title: "Frontend Web Developer",
  description:
    "A Software Developer passionate about building fast, interactive, and user-friendly web applications. I love solving problems and creating useful web applications - To simply put it! :)",
};

export const ABOUT_CONTENT = {
  description:
    "With 11 years of overall professional experience, I’ve spent the last 3 years as a Software Developer. My journey began in the Aerospace domain as a Mechanical Engineer (ADGT – Almost Rocket Science!), but during the COVID era, I discovered my passion for programming. As a self-taught developer, I transitioned into Frontend Web Development and have been building applications ever since. Currently, I’m expanding my expertise in Backend technologies, moving toward becoming a Full-Stack Developer.",
  ps: "Apart from coding I enjoy the following activities!",
  hobbies: [
    {
      id: 1,
      name: "Gaming",
      icon: SKILL_ICONS.Game,
    },
    {
      id: 2,
      name: "Photography",
      icon: SKILL_ICONS.Photography,
    },
    {
      id: 3,
      name: "Table Tennis",
      icon: SKILL_ICONS.TT,
    },
    {
      id: 4,
      name: "Guitar",
      icon: SKILL_ICONS.Guitar,
    },
  ],
};

export const HOME_LINKS: ExternalLink[] = [
  {
    link: "https://drive.google.com/file/d/1xzbUBiC1Oz7afVI_78vM4wlpkhkbhMgZ/view",
    icon: SKILL_ICONS.ExternalLink,
    title: "Resume",
    showTitle: true,
  },
  {
    link: "https://github.com/sylverflame/",
    icon: SKILL_ICONS.Github,
    title: "Github",
  },
  {
    link: "https://gitlab.com/users/tiptoppratik/projects",
    icon: SKILL_ICONS.Gitlab,
    title: "Gitlab",
  },
  {
    link: "https://www.linkedin.com/in/pratik-desai-3a8a7632/",
    icon: SKILL_ICONS.Linkedin,
    title: "Linkedin",
  },
];

// Experience Section
export const EXP_NODES: ExperienceType[] = [
  {
    type: "work",
    title: "Frontend Web Developer",
    organization: "Tata Consultancy Services (TCS)",
    location: "Bengaluru, India",
    startDate: new Date("Jan 2022"),
    endDate: new Date("Dec 2024"),
    description:
      "Exposure to working on a TCS product called OmniStore. Actively maintained different enterprise level web applications.",
  },
  {
    type: "work",
    title: "Stress Analysis Engineer - Lead",
    organization: "Tata Consultancy Services (TCS)",
    location: "Bengaluru, India | Montreal, Canada",
    startDate: new Date("Feb 2014"),
    endDate: new Date("Jan 2022"),
    description:
      "Worked as a Mechanical Integrity and Lifing Specialist for Gas Turbine components.",
  },
  {
    type: "education",
    title: "Bachelor of Engineering - Mechanical",
    organization: "Visveswaraya Technological University (VTU)",
    location: "Belgaum, India",
    startDate: new Date("Aug 2009"),
    endDate: new Date("Aug 2013"),
    description: "",
  },
];

// Skills Section
const LANGUAGES_LIST: Skill[] = [
  {
    name: "JavaScript",
    category: "Language",
    icon: SKILL_ICONS.JavaScript,
    rating: 4,
    comment: "I'm an expert!",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: SKILL_ICONS.TypeScript,
    rating: 4,
    comment: "I'm an expert!",
  },
  {
    name: "HTML5",
    category: "Language",
    icon: SKILL_ICONS.HTML5,
    rating: 4.5,
    comment: "I'm an expert!",
  },
  {
    name: "CSS3",
    category: "Language",
    icon: SKILL_ICONS.CSS3,
    rating: 4,
    comment: "I'm an expert!",
  },
  {
    name: "C",
    category: "Language",
    icon: SKILL_ICONS.C,
    rating: 1,
    comment: "The first language!",
  },
];
const FRONTEND_LIST: Skill[] = [
  {
    name: "React.js",
    category: "Frontend",
    icon: SKILL_ICONS.Reactjs,
    rating: 4.5,
    comment: "I'm an expert!",
  },
  {
    name: "Next.js",
    category: "Frontend",
    icon: SKILL_ICONS.Nextjs,
    rating: 3,
    comment: "I do understand SSR and App Router!",
  },
  {
    name: "Angular",
    category: "Frontend",
    icon: SKILL_ICONS.Angular,
    rating: 1,
    comment: "Good with the basics!",
  },
  {
    name: "Redux",
    category: "Frontend",
    icon: SKILL_ICONS.Redux,
    rating: 4.5,
    comment: "Good Experience wih this!",
  },
  {
    name: "Tailwind CSS",
    category: "Frontend",
    icon: SKILL_ICONS.Tailwind,
    rating: 4,
    comment: "The greatest CSS tool ever!",
  },
  {
    name: "Primereact",
    category: "Frontend",
    icon: SKILL_ICONS.Primereact,
    rating: 4.5,
    comment: "Omnistore used this library!",
  },
  {
    name: "Bootstrap",
    category: "Frontend",
    icon: SKILL_ICONS.Bootstrap,
    rating: 4,
    comment: "The OG CSS library!",
  },
  {
    name: "MaterialUI",
    category: "Frontend",
    icon: SKILL_ICONS.MaterialUI,
    rating: 4,
    comment: "A library I have used, but prefer not!",
  },
  {
    name: "Formik",
    category: "Frontend",
    icon: SKILL_ICONS.Formik,
    rating: 4,
    comment: "Complicated forms? Not anymore!",
  },
];

const BACKEND_SKILLS: Skill[] = [
  {
    name: "Node.js",
    category: "Frontend",
    icon: SKILL_ICONS.Nodejs,
    rating: 3,
    comment: "Thorough with Node!",
  },
  {
    name: "Express.js",
    category: "Frontend",
    icon: SKILL_ICONS.Expressjs,
    rating: 3,
    comment: "A good understanding setting up http servers and middlewares!",
  },
  {
    name: "Socket.io",
    category: "Frontend",
    icon: SKILL_ICONS.Socketio,
    rating: 2.5,
    comment: "I have built some chat apps and realtime games!",
  },
  {
    name: "RESTful APIs",
    category: "Frontend",
    icon: SKILL_ICONS.RESTAPI,
    rating: 4.5,
    comment: "A good understaning of designing and building them!",
  },
];

const DB_SKILLS: Skill[] = [
  {
    name: "Firebase",
    category: "Frontend",
    icon: SKILL_ICONS.Firebase,
    rating: 3,
    comment: "Basic understanding through personal projects!",
  },
  {
    name: "PostgreSQL",
    category: "Frontend",
    icon: SKILL_ICONS.PostgreSQL,
    rating: 2,
    comment: "Basic understanding through personal projects!",
  },
  {
    name: "MongoDB",
    category: "Frontend",
    icon: SKILL_ICONS.MongoDB,
    rating: 2,
    comment: "Basic understanding through personal projects!",
  },
];

const OTHER_SKILLS: Skill[] = [
  {
    name: "Webpack",
    category: "Frontend",
    icon: SKILL_ICONS.Webpack,
    rating: 3,
    comment: "",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SKILL_ICONS.Vite,
    rating: 4,
    comment: "Most used build tool!",
  },
  {
    name: "VS Code",
    category: "Frontend",
    icon: SKILL_ICONS.VSCode,
    rating: 4.5,
    comment: "No life without this one!",
  },
  {
    name: "git",
    category: "Frontend",
    icon: SKILL_ICONS.Git,
    rating: 4.5,
    comment: "Good with the necessary stuff!",
  },
  {
    name: "Docker",
    category: "Frontend",
    icon: SKILL_ICONS.Docker,
    rating: 1.5,
    comment: "Learning Docker!",
  },
  {
    name: "Jenkins",
    category: "Frontend",
    icon: SKILL_ICONS.Jenkins,
    rating: 2,
    comment: "Basics!",
  },
  {
    name: "AWS",
    category: "Frontend",
    icon: SKILL_ICONS.AWS,
    rating: 2,
    comment: "Understanding of EC2 and S3 modules!",
  },
];

export const SKILL_LIST = [
  {
    category: "Languages",
    skillsList: LANGUAGES_LIST,
    zIndex: 100,
  },
  {
    category: "Frontend",
    skillsList: FRONTEND_LIST,
    zIndex: 80,
  },
  {
    category: "Backend",
    skillsList: BACKEND_SKILLS,
    zIndex: 60,
  },
  {
    category: "Database",
    skillsList: DB_SKILLS,
    zIndex: 40,
  },
  {
    category: "Others",
    skillsList: OTHER_SKILLS,
    zIndex: 20,
  },
];

// Projects Section
export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    title: "TCS OmniStore",
    description:
      "TCS OmniStore is a unified commerce platform that enables seamless retail experiences across digital and physical touchpoints.",
    liveLink: "https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore",
    bgImage: OmniImage,
    skills: [
      "Reactjs",
      "Angular",
      "Redux",
      "TypeScript",
      "Formik",
      "Primereact",
    ],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "This is a fun little website showcasing my projects and experience. Try finding all the hidden easter eggs :)",
    liveLink: "https://www.mepratikdesai.work/",
    repoLink: "https://github.com/sylverflame/portfolio-pd-v1",
    bgImage: PortfolioImage,
    skills: ["Reactjs", "TypeScript", "Tailwind"],
  },
  {
    id: 3,
    title: "Count and Conquer",
    description:
      "Count and Conquer is an interactive math game designed to enhance quick arithmetic skills through timed challenges. It offers an engaging experience where players race against time and compete with other players across the world",
    liveLink: "https://countnconquer.netlify.app/",
    repoLink: "https://gitlab.com/tiptoppratik/math-party",
    bgImage: CNCImage,
    skills: [
      "Reactjs",
      "TypeScript",
      "RESTAPI",
      "Nodejs",
      "Expressjs",
      "Firebase",
      "Socketio",
    ],
  },
];
