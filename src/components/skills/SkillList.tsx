import { Skill } from "@/types";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

type SkillsListProps = {
  category: string;
  skillsList: Skill[];
  zIndex: number;
};

function SkillsList({ category, skillsList, zIndex }: SkillsListProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const renderRatingStars = (rating: number, id: string): React.ReactNode[] => {
    const stars: React.ReactNode[] = [];
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < Math.floor(rating); i++) {
      stars.push(<FaStar className="text-yellow-400" key={`${id}-${i}`} />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalf className="text-yellow-400" key={`${id}-half`} />);
    }

    return stars;
  };

  return (
    <>
      <h3 className="mt-6 text-lg">{category}</h3>
      <ul className="flex flex-wrap mt-2 gap-2">
        {skillsList.map((skill, index) => (
          <li
            className={`skill bg-[var(--accent)] flex items-center gap-2 p-2 px-3 rounded-xl relative text-sm`}
            key={skill.name}
            onMouseEnter={() => setHoveredSkill(skill.name)} // Track hovered skill
            onMouseLeave={() => setHoveredSkill(null)}
            style={{ zIndex: zIndex - index }}
          >
            <skill.icon className="md:text-2xl" />
            <span>{skill.name}</span>
            {hoveredSkill === skill.name && (
              <div className="skill-rating flex flex-col">
                <div className="flex">
                  {renderRatingStars(skill.rating, skill.name)}
                </div>
                <div>{skill.comment}</div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default SkillsList;
