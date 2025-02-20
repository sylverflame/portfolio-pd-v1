import { ExperienceType } from "@/types";
import { IoBookOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";

type XpCardProps = {
  experience: ExperienceType;
};

function XpCard({ experience }: XpCardProps) {
  return (
    <li
      key={experience.title}
      className="xp-card mt-4 p-4 md:p-8 border rounded-xl bg-[black]/50 w-full relative"
    >
      <div className="text-[--accent] font-bold">{experience.title}</div>
      <div className="text-xs italic">
        {experience.organization} - {experience.location}
      </div>
      <div className="text-xs mt-2">{experience.description}</div>
      <div className="xp-type absolute w-[30px] sm:w-[40px] md:w-[60px] bg-[var(--accent)] -left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square flex justify-center items-center z-30">
        {experience.type === "work" ? (
          <MdWork className="text-xl md:text-3xl" />
        ) : (
          <IoBookOutline className="text-xl md:text-3xl" />
        )}
      </div>
    </li>
  );
}

export default XpCard;
