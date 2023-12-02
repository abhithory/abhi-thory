import { Chip } from "@nextui-org/react";
import React, { ReactNode } from "react";
import {
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoSass,
  BiLogoTypescript,
} from "react-icons/bi";
import { FaDocker, FaEthereum, FaHardHat } from "react-icons/fa";
import { SiNestjs, SiSolidity } from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandNodejs,
  TbBrandReact,
  TbBrandTailwind,
} from "react-icons/tb";

export type OneSkillObjectType = {
  name: string;
  icon: ReactNode;
};

export type AllSkillsObjectType = {
  [index: string]: OneSkillObjectType;
};

export const allSkills: AllSkillsObjectType = {
  reactjs: {
    name: "ReactJs",
    icon: <TbBrandReact />,
  },
  nextjs: {
    name: "Nextjs",
    icon: <TbBrandNextjs />,
  },
  nodejs: {
    name: "Nodejs",
    icon: <TbBrandNodejs />,
  },
  javascript: {
    name: "JavaScript",
    icon: <BiLogoJavascript />,
  },
  typescript: {
    name: "Typescript",
    icon: <BiLogoTypescript />,
  },
  nestjs: {
    name: "NestJs",
    icon: <SiNestjs />,
  },
  tailwindcss: {
    name: "TailwindCss",
    icon: <TbBrandTailwind />,
  },
  sass: {
    name: "Sass",
    icon: <BiLogoSass />,
  },
  docker: {
    name: "Docker",
    icon: <FaDocker />,
  },
  solidity: {
    name: "Solidity",
    icon: <SiSolidity />,
  },
  etherjs: {
    name: "Ether.Js",
    icon: <FaEthereum />,
  },
  hardhat: {
    name: "Hardhat",
    icon: <FaHardHat />,
  },
};
export default function useSkills() {
  return {
    allSkills,
  };
}
