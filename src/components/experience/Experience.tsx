import BlurBgProvider from "@/components/ui/BlurBgProvider";
import "./Experience.css";
import { MdWork } from "react-icons/md";
import { IoBookOutline } from "react-icons/io5";

function Experience() {
  const EXP_NODES = [
    {
      type: "work",
      title: "Frontend Web Developer",
      organization: "Tata Consultancy Services (TCS)",
      location: "Bengaluru, India",
      startDate: new Date("Jan 2022"),
      endDate: new Date("Dec 2024"),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta dolore neque accusamus autem laudantium veniam est asperiores nostrum tempore, deserunt perferendis esse in, ad quam doloribus libero sequi soluta!",
    },
    {
      type: "work",
      title: "Stress Analysis Engineer - Lead",
      organization: "Tata Consultancy Services (TCS)",
      location: "Bengaluru, India | Montreal, Canada",
      startDate: new Date("Feb 2014"),
      endDate: new Date("Jan 2022"),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta dolore neque accusamus autem laudantium veniam est asperiores nostrum tempore, deserunt perferendis esse in, ad quam doloribus libero sequi soluta!",
    },
    {
      type: "education",
      title: "Bachelor of Engineering - Mechanical",
      organization: "Visveswaraya Technological University (VTU)",
      location: "Belgaum, India",
      startDate: new Date("Aug 2009"),
      endDate: new Date("Aug 2013"),
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dicta dolore neque accusamus autem laudantium veniam est asperiores nostrum tempore, deserunt perferendis esse in, ad quam doloribus libero sequi soluta!",
    },
  ];
  return (
    <section
      id="Experience"
      className="experience-component max-w-[1024px] m-auto relative text-[var(--foreground)] pb-36"
    >
      <BlurBgProvider>
        <h2 className="text-4xl lg:text-5xl xl:text-6xl text-[var(--accent)] font-bold shadow">
          Experience
        </h2>
        <div className="xp-card-container">
          <ul className="flex flex-col mt-6 items-start w-[80%]">
            {EXP_NODES.map((experience) => {
              return (
                <li
                  key={experience.title}
                  className="xp-card mt-4 p-4 border rounded bg-[black]/50 w-full relative"
                >
                  <div className="text-[--accent] font-bold">
                    {experience.title}
                  </div>
                  <div className="text-xs italic">
                    {experience.organization} - {experience.location}
                  </div>
                  <div className="text-justify text-xs mt-2">
                    {experience.description}
                  </div>
                  <div className="xp-type absolute w-[30px] sm:w-[40px] md:w-[60px] bg-[var(--accent)] -left-[10%] top-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square flex justify-center items-center z-30">
                    {experience.type === "work" ? (
                      <MdWork className="text-xl md:text-3xl" />
                    ) : (
                      <IoBookOutline className="text-xl md:text-3xl" />
                    )}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </BlurBgProvider>
    </section>
  );
}

export default Experience;
