import BlurBgProvider from "@/components/ui/BlurBgProvider";
import { EXP_NODES } from "@/constants/content";
import "./Experience.css";
import XpCard from "./XpCard";
import AnimatedSection from "../ui/AnimatedSection";

function Experience() {
  return (
    <AnimatedSection
      id="Experience"
      className="experience-component max-w-[1024px] min-h-screen m-auto relative text-[var(--foreground)] pb-36"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          Experience
        </h2>
        <div className="xp-card-container">
          <ul className="flex flex-col mt-12 items-start w-[80%]">
            {EXP_NODES.map((experience) => {
              return <XpCard experience={experience} key={experience.title} />;
            })}
          </ul>
        </div>
      </BlurBgProvider>
    </AnimatedSection>
  );
}

export default Experience;
