import BlurBgProvider from "@/components/ui/BlurBgProvider";
import { PROJECTS_LIST } from "@/constants/content";
import ProjectCard from "./ProjectCard";
import "./Projects.css";
import AnimatedSection from "../ui/AnimatedSection";

function Projects() {
  return (
    <AnimatedSection
      id="Projects"
      className="projects-component max-w-[1024px] m-auto min-h-screen relative text-[var(--foreground)] pb-36"
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
    </AnimatedSection>
  );
}

export default Projects;
