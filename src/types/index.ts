import { IconType } from "react-icons";

export type ExperienceType = {
  type: "work" | "education";
  title: string;
  organization: string;
  location: string;
  startDate: Date;
  endDate: Date;
  description: string;
};

export type Skill = {
  name: string;
  category: "Frontend" | "Backend" | "Database" | "DevOps" | "Language";
  description?: string;
  icon: IconType;
  rating: number;
  comment: string;
};

export type SkillIcons = Record<string, IconType>;

export type Project = {
  id: number;
  title: string;
  description: string;
  liveLink?: string;
  repoLink?: string;
  bgImage?: string;
  skills?: (keyof SkillIcons)[];
};

export type ExternalLink = {
  link: string;
  icon: IconType;
  title: string;
  showTitle?: boolean;
};

export type NavbarMenuItem = { label: string };
