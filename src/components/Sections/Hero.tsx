import useSocialMediaLinks from '@/hooks/useSocialMediaLinks';
import React, { useEffect, useState } from 'react';
import ProjectCard from '../Cards/ProjectCard';
import { personalProjects } from '@/assests/data/projectsData';
import { Chip } from '@nextui-org/react';
import useSkills from '@/hooks/useSkills';
import Marquee from 'react-fast-marquee';

type Props = {};

export const HelloDetails = () => {
  const { renderSocialMediaLinks } = useSocialMediaLinks();
  return (
    <div>
      <h1 className="text_heading_size mt-10 py-5 text-center font-Monserrat  font-bold sm:mt-20">
        <span className="text-primary">Abhishek Thory</span> <br />
        Full Stack Developer
      </h1>
      <div className="flex items-center justify-center gap-5 text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
        {renderSocialMediaLinks()}
      </div>
    </div>
  );
};

const Hero = ({ }: Props) => {
  const { allSkills } = useSkills();

  return (
    <div>
      <HelloDetails />
      <div className="mt-10 w-[100vw] rotate-[-4deg] md:mt-20 ">
        <Marquee pauseOnHover={true}>
          {Object.keys(allSkills).map((key, index) => {
            const item = allSkills[key as keyof typeof allSkills];
            return (
              <div className="mx-2 cursor-pointer" key={index}>
                <Chip
                  className="text-1xl p-5 hover:border-warning hover:text-warning md:p-8 md:text-3xl"
                  color="primary"
                  variant="bordered"
                  radius="md"
                  startContent={item.icon}
                >
                  {item.name}
                </Chip>
              </div>
            );
          })}
        </Marquee>
      </div>

      <div className="mb-10  mt-6 w-[100vw]  rotate-[-4deg]  md:mb-20">
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
