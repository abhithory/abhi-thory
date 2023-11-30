"use client";
import useSocialMediaLinks from "@/hooks/useSocialMediaLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import ProjectCard from "../Cards/ProjectCard";
import { personalProjects } from "@/assests/data/projectsData";
import { Chip } from "@nextui-org/react";
import useSkills from "@/hooks/useSkills";
import Marquee from "react-fast-marquee";

type Props = {};



const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  const { renderSocialMediaLinks } = useSocialMediaLinks();
  const { allSkills } = useSkills();


  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }



  return (
    <div className="">
      <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
        <span className="text-primary">Abhishek Thory</span> <br />
        Full Stack Developer
      </h1>
      <div className="flex gap-5 justify-center items-center text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl">
        {renderSocialMediaLinks()}
      </div>
      {/* <div className="md:mt-5">
          <Image
            src={"/assets/line.png"}
            alt=""
            className="absolute  md:block"
            width={2000}
            height={2}
          />
        </div> */}


      <div className="rotate-[-4deg] w-[100vw] mt-20 ">
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
