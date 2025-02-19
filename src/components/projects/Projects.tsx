import BlurBgProvider from "../ui/BlurBgProvider";

function Projects() {
  return (
    <section
      id="Projects"
      className="projects-component max-w-[1024px] m-auto h-screen relative text-[var(--foreground)]"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          Projects
        </h2>
      </BlurBgProvider>
    </section>
  );
}

export default Projects;
