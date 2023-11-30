"use client";
import useSocialMediaLinks from "@/hooks/useSocialMediaLinks";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MarQuee from "react-fast-marquee";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import ProjectCard from "../Cards/ProjectCard";
import { personalProjects } from "@/assests/data/projectsData";
import { Chip } from "@nextui-org/react";
import { TbBrandNextjs } from "react-icons/tb";
import useSkills from "@/hooks/useSkills";

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


      <div className="rotate-[-4deg] w-[100vw] mt-20">
        <MarQuee pauseOnClick={true} direction="left" pauseOnHover={false} speed={50}>
          {Object.keys(allSkills).map((key, index) => {
            const item = allSkills[key as keyof typeof allSkills];
            return (
              <div className="mx-2 cursor-pointer" key={index} >
                <Chip className="text-3xl p-8 hover:text-warning hover:border-warning" color="primary" variant="bordered" radius="md" startContent={item.icon}>{item.name}</Chip>
              </div>
            );
          })}
        </MarQuee>
      </div>
      <div className="rotate-[-4deg] w-[100vw] mt-20">
        <MarQuee pauseOnClick={true} pauseOnHover={true} direction="right" className="mt-8" speed={50}>
          {Object.keys(personalProjects).map((key, index) => {
            const item = personalProjects[key as keyof typeof personalProjects];
            return (
              <div className="mx-2" key={index}>
                <ProjectCard projectDetail={item} />
              </div>
            );
          })}
        </MarQuee>
      </div>
    </div>
  );
};

export default Hero;
