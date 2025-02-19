import BlurBgProvider from "@/components/ui/BlurBgProvider";
import { SKILL_LIST } from "@/constants/content";
import SkillsList from "./SkillList";
import "./Skills.css";

function Skills() {
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

export default Skills;
