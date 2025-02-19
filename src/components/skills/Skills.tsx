import { useState } from "react";
import { type IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiFormik,
  SiJenkins,
  SiMongodb,
  SiMui,
  SiPrimereact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import { VscTerminalCmd, VscVscode } from "react-icons/vsc";
import BlurBgProvider from "../ui/BlurBgProvider";
import "./Skills.css";

type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Language";
  description?: string;
  icon: IconType;
  rating: number;
  comment: string;
};

function Skills() {
  const LANGUAGES_LIST: Skill[] = [
    {
      name: "Javascript",
      category: "Language",
      icon: FaJs,
      rating: 4.5,
      comment: "I'm an expert!",
    },
    {
      name: "Typescript",
      category: "Language",
      icon: BiLogoTypescript,
      rating: 4,
      comment: "I'm an expert!",
    },
    {
      name: "HTML5",
      category: "Language",
      icon: FaHtml5,
      rating: 5,
      comment: "I'm an expert!",
    },
    {
      name: "CSS3",
      category: "Language",
      icon: FaCss3Alt,
      rating: 4,
      comment: "I'm an expert!",
    },
    {
      name: "C",
      category: "Language",
      icon: VscTerminalCmd,
      rating: 1,
      comment: "The first language!",
    },
  ];
  const FRONTEND_LIST: Skill[] = [
    {
      name: "React.js",
      category: "Frontend",
      icon: FaReact,
      rating: 4.5,
      comment: "I'm an expert!",
    },
    {
      name: "Next.js",
      category: "Frontend",
      icon: TbBrandNextjs,
      rating: 3,
      comment: "I do understand SSR and App Router!",
    },
    {
      name: "Angular",
      category: "Frontend",
      icon: FaAngular,
      rating: 1,
      comment: "Good with the basics!",
    },
    {
      name: "Redux",
      category: "Frontend",
      icon: SiRedux,
      rating: 4.5,
      comment: "Good Experience wih this!",
    },
    {
      name: "Tailwind CSS",
      category: "Frontend",
      icon: SiTailwindcss,
      rating: 4,
      comment: "The greatest CSS tool ever!",
    },
    {
      name: "Prime React",
      category: "Frontend",
      icon: SiPrimereact,
      rating: 4.5,
      comment: "Omnistore used this library!",
    },
    {
      name: "Bootstrap",
      category: "Frontend",
      icon: FaBootstrap,
      rating: 4,
      comment: "The OG CSS library!",
    },
    {
      name: "Material UI",
      category: "Frontend",
      icon: SiMui,
      rating: 4,
      comment: "A library I have used, but prefer not!",
    },
    {
      name: "Formik",
      category: "Frontend",
      icon: SiFormik,
      rating: 4,
      comment: "Complicated forms? Not anymore!",
    },
  ];

  const BACKEND_SKILLS: Skill[] = [
    {
      name: "Node.js",
      category: "Frontend",
      icon: FaNodeJs,
      rating: 4,
      comment: "Thorough with Node!",
    },
    {
      name: "Express.js",
      category: "Frontend",
      icon: SiExpress,
      rating: 4,
      comment: "I do know SSR!",
    },
    {
      name: "Socket.io",
      category: "Frontend",
      icon: SiSocketdotio,
      rating: 3,
      comment: "I have built some chat apps and realtime games!",
    },
    {
      name: "RESTful APIs",
      category: "Frontend",
      icon: TbApi,
      rating: 4.5,
      comment: "A good understaning of designing and building them!",
    },
  ];

  const DB_SKILLS: Skill[] = [
    {
      name: "Firebase",
      category: "Frontend",
      icon: SiFirebase,
      rating: 3,
      comment: "I do know SSR!",
    },
    {
      name: "PostgreSQL",
      category: "Frontend",
      icon: BiLogoPostgresql,
      rating: 3,
      comment: "I do know SSR!",
    },
    {
      name: "MongoDB",
      category: "Frontend",
      icon: SiMongodb,
      rating: 3,
      comment: "I do know SSR!",
    },
  ];

  const OTHER_SKILLS: Skill[] = [
    {
      name: "Webpack",
      category: "Frontend",
      icon: SiWebpack,
      rating: 3,
      comment: "I do know SSR!",
    },
    {
      name: "Vite",
      category: "Frontend",
      icon: SiVite,
      rating: 4,
      comment: "I do know SSR!",
    },
    {
      name: "VS Code",
      category: "Frontend",
      icon: VscVscode,
      rating: 4.5,
      comment: "I do know SSR!",
    },
    {
      name: "git",
      category: "Frontend",
      icon: FaGitAlt,
      rating: 4.5,
      comment: "I do know SSR!",
    },
    {
      name: "Docker",
      category: "Frontend",
      icon: FaDocker,
      rating: 2,
      comment: "I do know SSR!",
    },
    {
      name: "Jenkins",
      category: "Frontend",
      icon: SiJenkins,
      rating: 2,
      comment: "I do know SSR!",
    },
    {
      name: "AWS",
      category: "Frontend",
      icon: FaAws,
      rating: 2,
      comment: "I do know SSR!",
    },
  ];
  return (
    <section
      id="Skills"
      className="skills-component max-w-[1024px] m-auto h-screen relative text-[var(--foreground)]"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          Skills
        </h2>
        <SkillsList category="Languages" skillsList={LANGUAGES_LIST} />
        <SkillsList category="Frontend" skillsList={FRONTEND_LIST} />
        <SkillsList category="Backend" skillsList={BACKEND_SKILLS} />
        <SkillsList category="Database" skillsList={DB_SKILLS} />
        <SkillsList category="Others" skillsList={OTHER_SKILLS} />
      </BlurBgProvider>
    </section>
  );
}

type SkillsListProps = {
  category: string;
  skillsList: Skill[];
};

function SkillsList({ category, skillsList }: SkillsListProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getRatingStars = (rating: number): React.ReactNode => {
    let starsArray = [];
    let halfFlag = false;

    if (rating / Math.floor(rating) > 1) {
      halfFlag = true;
    }

    rating = Math.floor(rating);

    for (let i = 1; i <= rating; i++) {
      starsArray.push(<FaStar className="text-yellow-400" />);
    }
    if (halfFlag) starsArray.push(<FaStarHalf className="text-yellow-400" />);
    return starsArray;
  };

  return (
    <>
      <h6 className="mt-6 text-xl">{category}</h6>
      <ul className="flex flex-wrap mt-2 gap-2">
        {skillsList.map((skill) => {
          return (
            <li
              className="skill bg-[var(--accent)] flex items-center gap-2 p-2 px-3 rounded-[10px] relative text-sm"
              data-comment={skill.comment}
              onMouseEnter={() => setHoveredSkill(skill.name)} // Track hovered skill
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <skill.icon className="md:text-3xl" />
              <span>{skill.name}</span>
              {hoveredSkill === skill.name && (
                <div className="skill-rating flex flex-col">
                  <div className="flex">{getRatingStars(skill.rating)}</div>
                  <div>{skill.comment}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Skills;
