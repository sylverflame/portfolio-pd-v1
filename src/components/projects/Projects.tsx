import BlurBgProvider from "@/components/ui/BlurBgProvider";
import PortfolioImage from "@/assets/Prat_Portfolio.webp";
import OmniImage from "@/assets/Omni.webp";
import CNCImage from "@/assets/CNC.webp";
import "./Projects.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { SKILL_ICONS } from "@/constants/skill-icons";

type Project = {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  repoLink?: string;
  bgImage?: string;
  skills?: (keyof typeof SKILL_ICONS)[];
};
function Projects() {
  const PROJECTS_LIST: Project[] = [
    {
      id: 1,
      title: "TCS OmniStore",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eligendi id quo sit nemo maiores cupiditate, vel ab obcaecati voluptatum amet illo ad libero in asperiores ea aperiam ut autem!",
      liveLink:
        "https://www.tcs.com/what-we-do/products-platforms/tcs-omnistore",
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
  return (
    <section
      id="Projects"
      className="projects-component max-w-[1024px] m-auto min-h-screen relative text-[var(--foreground)]"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          Projects
        </h2>
        <div className="projects flex flex-wrap gap-4 mt-10 justify-center">
          {PROJECTS_LIST.map((project) => {
            return <ProjectCard project={project} key={project.id} />;
          })}
        </div>
      </BlurBgProvider>
    </section>
  );
}

type ProjectCardProps = { project: Project };

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="project-card w-[500px] h-[300px] md:h-[300px] bg-[var(bg-navbar)] rounded-xl relative overflow-hidden border hover:scale-[1.01] trasition-all">
      <img
        src={project.bgImage}
        alt=""
        className="project-bg absolute left-0 top-0 w-full h-full object-cover"
      />
      <div className="card-content relative backdrop-blur-[5px] hover:backdrop-blur-[2px] transition-all bg-[var(--bg-navbar)] w-full h-full p-6">
        <div className="text-md font-bold">{project.title}</div>
        <div className="text-xs md:text-sm mt-6">{project.description}</div>
        <div className="flex gap-2 mt-4">
          {project.skills &&
            project.skills.map((skill) => {
              const Icon = SKILL_ICONS[skill];
              return <Icon className="text-2xl cursor-pointer" title={skill} />;
            })}
        </div>
        <div className="project-links bg-[var(--accent)] w-full absolute bottom-0 left-0 h-10 px-6 flex items-center gap-6">
          {project.liveLink && (
            <a
              href={project.liveLink}
              title="Live Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaExternalLinkAlt />
            </a>
          )}
          {project.repoLink && (
            <a
              href={project.liveLink}
              title="Repository Link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
