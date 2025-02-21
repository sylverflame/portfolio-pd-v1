import { ABOUT_CONTENT } from "@/constants/content";
import AnimatedSection from "../ui/AnimatedSection";
import BlurBgProvider from "../ui/BlurBgProvider";

function About() {
  return (
    <AnimatedSection
      id="About"
      className="about-component max-w-[1024px] m-auto min-h-screen relative text-[var(--foreground)] mt-36 pb-36"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          About Me!
        </h2>
        <div className="md:text-xl mt-10">{ABOUT_CONTENT.description}</div>
        <div className="md:text-xl mt-10">{ABOUT_CONTENT.ps}</div>
        <ul className="grid grid-cols-12 w-full mt-6">
          {ABOUT_CONTENT.hobbies.map((hobby) => {
            return (
              <li
                key={hobby.id}
                className="flex flex-col items-center mt-4 col-span-6 md:col-span-3"
              >
                <hobby.icon className="text-[100px] sm:text-[120px] md:text-[150px] text-[var(--accent)]" />
                <h3 className="md:text-xl">{hobby.name}</h3>
              </li>
            );
          })}
        </ul>
      </BlurBgProvider>
    </AnimatedSection>
  );
}

export default About;
