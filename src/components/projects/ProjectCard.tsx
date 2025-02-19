import { SKILL_ICONS } from "@/constants/skill-icons";
import { Project } from "@/types";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
              return (
                <Icon
                  className="text-2xl cursor-pointer"
                  title={skill as string}
                  key={skill}
                />
              );
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

export default ProjectCard;
