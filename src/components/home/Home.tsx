import BlurBgProvider from "../ui/BlurBgProvider";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { FaGitlab } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import "./Home.css";

function Home() {
  return (
    <section
      id="Home"
      className="home-component h-[calc(100vh-100px)] text-[var(--foreground)] max-w-[1024px] m-auto flex items-center"
    >
      <BlurBgProvider>
        <div className="relative z-10 grid grid-cols-12 gap-6">
          <div className="col-span-12 sm:col-span-6 xl:col-span-8 flex flex-col justify-center">
            <div className="text-2xl lg:text-3xl">Hello!</div>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl">
              <span>I'm </span>
              <span className="text-[var(--accent)] font-bold shadow">
                Pratik Desai
              </span>
            </h1>
            <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] mt-6 sm:hidden relative aspect-square bg-center bg-no-repeat bg-contain" />
            <div className="md:text-xl mt-6 text-justify">
              A Software Developer passionate about building fast, interactive,
              and user-friendly web applications. With experience in React.js,
              TypeScript, Firebase, and Redux, I love solving problems and
              creating seamless digital experiences.
            </div>
          </div>
          <div className="pratik-picture col-span-12 sm:col-span-6 xl:col-span-4 m-auto w-[200px] md:w-[300px] xl:w-[335px] hidden sm:block relative rounded-full aspect-square bg-center bg-no-repeat bg-contain" />
          <div className="links col-span-12 flex flex-wrap gap-4">
            <a
              className="resume p-2 px-3 cursor-pointer relative flex items-center gap-2"
              href="https://drive.google.com/file/d/1xzbUBiC1Oz7afVI_78vM4wlpkhkbhMgZ/view"
            >
              {<FaExternalLinkAlt />}
              Resume
            </a>
            <a
              className="resume p-2 px-3 cursor-pointer relative flex items-center"
              href="https://github.com/sylverflame/"
            >
              {<FaGithub className="text-3xl" />}
            </a>
            <a
              className="resume p-2 px-3 cursor-pointer relative flex items-center"
              href="https://gitlab.com/users/tiptoppratik/projects"
            >
              {<FaGitlab className="text-2xl" />}
            </a>
            <a
              className="resume p-2 px-3 cursor-pointer relative flex items-center"
              href="https://www.linkedin.com/in/pratik-desai-3a8a7632/"
            >
              {<FaLinkedin className="text-3xl" />}
            </a>
          </div>
        </div>
      </BlurBgProvider>
    </section>
  );
}

export default Home;
