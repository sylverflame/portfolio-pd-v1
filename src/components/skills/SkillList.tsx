import { Skill } from "@/types";
import { useState } from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";

type SkillsListProps = {
  category: string;
  skillsList: Skill[];
};

function SkillsList({ category, skillsList }: SkillsListProps) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const getRatingStars = (rating: number): React.ReactNode => {
    let starsArray = [];
    let halfFlag = false;

    if (rating / Math.floor(rating) > 1) {
      halfFlag = true;
    }

    rating = Math.floor(rating);

    for (let i = 1; i <= rating; i++) {
      starsArray.push(<FaStar className="text-yellow-400" />);
    }
    if (halfFlag) starsArray.push(<FaStarHalf className="text-yellow-400" />);
    return starsArray;
  };

  return (
    <>
      <h6 className="mt-6 text-xl">{category}</h6>
      <ul className="flex flex-wrap mt-2 gap-2">
        {skillsList.map((skill) => {
          return (
            <li
              className="skill bg-[var(--accent)] flex items-center gap-2 p-2 px-3 rounded-xl relative text-sm"
              data-comment={skill.comment}
              onMouseEnter={() => setHoveredSkill(skill.name)} // Track hovered skill
              onMouseLeave={() => setHoveredSkill(null)}
              key={skill.name}
            >
              <skill.icon className="md:text-2xl" />
              <span>{skill.name}</span>
              {hoveredSkill === skill.name && (
                <div
                  className="skill-rating flex flex-col"
                  key={skill.name + skill.rating}
                >
                  <div className="flex">{getRatingStars(skill.rating)}</div>
                  <div>{skill.comment}</div>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default SkillsList;
