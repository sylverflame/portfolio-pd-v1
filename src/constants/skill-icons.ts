import { IconType } from "react-icons";
import { BiLogoPostgresql, BiLogoTypescript } from "react-icons/bi";
import {
  FaAngular,
  FaAws,
  FaBootstrap,
  FaCss3Alt,
  FaDocker,
  FaExternalLinkAlt,
  FaGitAlt,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa6";
import {
  SiExpress,
  SiFirebase,
  SiFormik,
  SiJenkins,
  SiMongodb,
  SiMui,
  SiPrimereact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiVite,
  SiWebpack,
} from "react-icons/si";
import { TbApi, TbBrandNextjs } from "react-icons/tb";
import { VscTerminalCmd, VscVscode } from "react-icons/vsc";

const SKILL_ICONS: Record<string, IconType> = {
  Reactjs: FaReact,
  Nextjs: TbBrandNextjs,
  Angular: FaAngular,
  TypeScript: BiLogoTypescript,
  JavaScript: FaJs,
  Nodejs: FaNodeJs,
  AWS: FaAws,
  Docker: FaDocker,
  Git: FaGitAlt,
  HTML5: FaHtml5,
  CSS3: FaCss3Alt,
  Webpack: SiWebpack,
  Vite: SiVite,
  Jenkins: SiJenkins,
  Socketio: SiSocketdotio,
  Tailwind: SiTailwindcss,
  Redux: SiRedux,
  Formik: SiFormik,
  Primereact: SiPrimereact,
  MaterialUI: SiMui,
  Expressjs: SiExpress,
  MongoDB: SiMongodb,
  Firebase: SiFirebase,
  RESTAPI: TbApi,
  VSCode: VscVscode,
  C: VscTerminalCmd,
  PostgreSQL: BiLogoPostgresql,
  Bootstrap: FaBootstrap,
  ExternalLink: FaExternalLinkAlt,
  Github: FaGithub,
  Gitlab: FaGitlab,
  Linkedin: FaLinkedin,
};

export { SKILL_ICONS };
