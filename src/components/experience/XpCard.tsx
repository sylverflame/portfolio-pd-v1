import { ExperienceType } from "@/types";
import { IoBookOutline } from "react-icons/io5";
import { MdWork } from "react-icons/md";
import { motion } from "framer-motion";

type XpCardProps = {
  experience: ExperienceType;
  index: number;
};

function XpCard({ experience, index }: XpCardProps) {
  return (
    <motion.li
      initial={{ opacity: 0, translateX: 10 }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ delay: index * 0.3 }}
      viewport={{ once: true }}
      key={experience.title}
      className="xp-card mt-4 p-4 md:p-8 border rounded-xl bg-[black]/50 w-full relative"
    >
      <div className="text-[--accent] font-bold">{experience.title}</div>
      <div className="text-xs italic">
        {experience.organization} - {experience.location}
      </div>
      <div className="text-xs italic">
        {experience.startDate} - {experience.endDate}
      </div>
      <div className="text-sm mt-4">{experience.description}</div>
      <div className="xp-type absolute w-[30px] sm:w-[40px] md:w-[60px] bg-[var(--accent)] -left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square flex justify-center items-center z-30">
        {experience.type === "work" ? (
          <MdWork className="text-xl md:text-3xl" />
        ) : (
          <IoBookOutline className="text-xl md:text-3xl" />
        )}
      </div>
    </motion.li>
  );
}

export default XpCard;
