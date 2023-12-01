import useSocialMediaLinks from "@/hooks/useSocialMediaLinks";
import React, { useEffect, useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { personalProjects } from "@/assests/data/projectsData";
import { Chip } from "@nextui-org/react";
import useSkills from "@/hooks/useSkills";
import Marquee from "react-fast-marquee";

type Props = {};

const Hero = ({ }: Props) => {
  const { renderSocialMediaLinks } = useSocialMediaLinks();
  const { allSkills } = useSkills();

  return (
    <div>
      <h1 className="font-Monserrat text_heading_size font-bold text-center py-5  sm:mt-20 mt-10">
        <span className="text-primary">Abhishek Thory</span> <br />
        Full Stack Developer
      </h1>
      <div className="flex gap-5 justify-center items-center text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
        {renderSocialMediaLinks()}
      </div>
      <div className="rotate-[-4deg] w-[100vw] mt-10 md:mt-20 ">
        <Marquee pauseOnHover={true}>
          {Object.keys(allSkills).map((key, index) => {
            const item = allSkills[key as keyof typeof allSkills];
            return (
              <div className="mx-2 cursor-pointer" key={index} >
                <Chip className="text-1xl md:text-3xl p-5 md:p-8 hover:text-warning hover:border-warning" color="primary" variant="bordered" radius="md" startContent={item.icon}>{item.name}</Chip>
              </div>
            );
          })}
        </Marquee>
      </div>

      <div className="rotate-[-4deg] w-[100vw] mb-10 md:mb-20 mt-6">
        <Marquee direction="right" pauseOnHover={true}>
          {Object.keys(personalProjects).map((key, index) => {
            const item = personalProjects[key as keyof typeof personalProjects];
            return (
              <div className="mx-2" key={index}>
                <ProjectCard projectDetail={item} />

              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
