import BlurBgProvider from "@/components/ui/BlurBgProvider";
import { SKILL_ICONS } from "@/constants/skill-icons";
import { useState } from "react";
import { type IconType } from "react-icons";
import { FaStar, FaStarHalf } from "react-icons/fa";
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

  const SKILL_LIST = [
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
  return (
    <section
      id="Skills"
      className="skills-component max-w-[1024px] m-auto min-h-screen relative text-[var(--foreground)] pb-36"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          Skills
        </h2>
        {SKILL_LIST.map((skill, index) => {
          return (
            <SkillsList
              key={index}
              category={skill.category}
              skillsList={skill.skillsList}
            />
          );
        })}
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
              className="skill bg-[var(--accent)] flex items-center gap-2 p-2 px-3 rounded-xl relative text-sm"
              data-comment={skill.comment}
              onMouseEnter={() => setHoveredSkill(skill.name)} // Track hovered skill
              onMouseLeave={() => setHoveredSkill(null)}
              key={skill.name}
            >
              <skill.icon className="md:text-2xl" />
              <span>{skill.name}</span>
              {hoveredSkill === skill.name && (
                <div
                  className="skill-rating flex flex-col"
                  key={skill.name + skill.rating}
                >
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
