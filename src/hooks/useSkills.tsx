import { Chip } from '@nextui-org/react';
import React from 'react'
import { BiLogoTypescript } from 'react-icons/bi';
import { FaDocker, FaEthereum, FaHardHat } from 'react-icons/fa';
import { SiSolidity } from 'react-icons/si';
import { TbBrandNextjs, TbBrandNodejs, TbBrandReact, TbBrandTailwind } from 'react-icons/tb';

export default function useSkills() {
  const allSkills = {
    reactjs: {
      name: "ReactJs",
      icon: <TbBrandReact />
    },
    nextjs: {
      name: "Nextjs",
      icon: <TbBrandNextjs />
    },
    nodejs: {
      name: "Nodejs",
      icon: <TbBrandNodejs />
    },
    typescript: {
      name: "Typescript",
      icon: <BiLogoTypescript />
    },
    tailwindcss: {
      name: "TailwindCss",
      icon: <TbBrandTailwind />
    },
    docker: {
      name: "Docker",
      icon: <FaDocker />
    },
    solidity: {
      name: "Solidity",
      icon: <SiSolidity />
    },
    etherjs: {
      name: "Ether.Js",
      icon: <FaEthereum />
    },
    hardhat: {
      name: "Hardhat",
      icon: <FaHardHat />
    },

  };


  return {
    allSkills
  }
}
