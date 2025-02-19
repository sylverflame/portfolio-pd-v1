import { ExperienceType, Project, Skill } from "@/types";
import { SKILL_ICONS } from "./skill-icons";
import PortfolioImage from "@/assets/Prat_Portfolio.webp";
import OmniImage from "@/assets/Omni.webp";
import CNCImage from "@/assets/CNC.webp";

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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta dolore neque accusamus autem laudantium veniam est asperiores nostrum tempore, deserunt perferendis esse in, ad quam doloribus libero sequi soluta!",
  },
  {
    type: "work",
    title: "Stress Analysis Engineer - Lead",
    organization: "Tata Consultancy Services (TCS)",
    location: "Bengaluru, India | Montreal, Canada",
    startDate: new Date("Feb 2014"),
    endDate: new Date("Jan 2022"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta dolore neque accusamus autem laudantium veniam est asperiores nostrum tempore, deserunt perferendis esse in, ad quam doloribus libero sequi soluta!",
  },
  {
    type: "education",
    title: "Bachelor of Engineering - Mechanical",
    organization: "Visveswaraya Technological University (VTU)",
    location: "Belgaum, India",
    startDate: new Date("Aug 2009"),
    endDate: new Date("Aug 2013"),
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta dolore neque accusamus autem laudantium veniam est asperiores nostrum tempore, deserunt perferendis esse in, ad quam doloribus libero sequi soluta!",
  },
];

// Skills Section
const LANGUAGES_LIST: Skill[] = [
  {
    name: "JavaScript",
    category: "Language",
    icon: SKILL_ICONS.JavaScript,
    rating: 4.5,
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
    rating: 5,
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
    rating: 4,
    comment: "Thorough with Node!",
  },
  {
    name: "Express.js",
    category: "Frontend",
    icon: SKILL_ICONS.Expressjs,
    rating: 4,
    comment: "I do know SSR!",
  },
  {
    name: "Socket.io",
    category: "Frontend",
    icon: SKILL_ICONS.Socketio,
    rating: 3,
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
    comment: "I do know SSR!",
  },
  {
    name: "PostgreSQL",
    category: "Frontend",
    icon: SKILL_ICONS.PostgreSQL,
    rating: 3,
    comment: "I do know SSR!",
  },
  {
    name: "MongoDB",
    category: "Frontend",
    icon: SKILL_ICONS.MongoDB,
    rating: 3,
    comment: "I do know SSR!",
  },
];

const OTHER_SKILLS: Skill[] = [
  {
    name: "Webpack",
    category: "Frontend",
    icon: SKILL_ICONS.Webpack,
    rating: 3,
    comment: "I do know SSR!",
  },
  {
    name: "Vite",
    category: "Frontend",
    icon: SKILL_ICONS.Vite,
    rating: 4,
    comment: "I do know SSR!",
  },
  {
    name: "VS Code",
    category: "Frontend",
    icon: SKILL_ICONS.VSCode,
    rating: 4.5,
    comment: "I do know SSR!",
  },
  {
    name: "git",
    category: "Frontend",
    icon: SKILL_ICONS.Git,
    rating: 4.5,
    comment: "I do know SSR!",
  },
  {
    name: "Docker",
    category: "Frontend",
    icon: SKILL_ICONS.Docker,
    rating: 2,
    comment: "I do know SSR!",
  },
  {
    name: "Jenkins",
    category: "Frontend",
    icon: SKILL_ICONS.Jenkins,
    rating: 2,
    comment: "I do know SSR!",
  },
  {
    name: "AWS",
    category: "Frontend",
    icon: SKILL_ICONS.AWS,
    rating: 2,
    comment: "I do know SSR!",
  },
];

export const SKILL_LIST = [
  {
    category: "Languages",
    skillsList: LANGUAGES_LIST,
  },
  {
    category: "Frontend",
    skillsList: FRONTEND_LIST,
  },
  {
    category: "Backend",
    skillsList: BACKEND_SKILLS,
  },
  {
    category: "Database",
    skillsList: DB_SKILLS,
  },
  {
    category: "Others",
    skillsList: OTHER_SKILLS,
  },
];

// Projects Section
export const PROJECTS_LIST: Project[] = [
  {
    id: 1,
    title: "TCS OmniStore",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi id quo sit nemo maiores cupiditate, vel ab obcaecati voluptatum amet illo ad libero in asperiores ea aperiam ut autem!",
    liveLink: "https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore",
    bgImage: OmniImage,
    skills: ["Reactjs", "Redux", "TypeScript", "Formik"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi id quo sit nemo maiores cupiditate, vel ab obcaecati voluptatum amet illo ad libero in asperiores ea aperiam ut autem!",
    liveLink: "https://www.mepratikdesai.work/",
    repoLink: "https://github.com/sylverflame/portfolio-pd-v1",
    bgImage: PortfolioImage,
    skills: ["Reactjs", "TypeScript"],
  },
  {
    id: 3,
    title: "Count and Conquer",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi id quo sit nemo maiores cupiditate, vel ab obcaecati voluptatum amet illo ad libero in asperiores ea aperiam ut autem!",
    liveLink: "https://countnconquer.netlify.app/",
    repoLink: "https://gitlab.com/tiptoppratik/math-party",
    bgImage: CNCImage,
    skills: ["Reactjs", "TypeScript"],
  },
];
