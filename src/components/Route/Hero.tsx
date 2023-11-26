"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import MarQuee from "react-fast-marquee";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";

type Props = {};

const rowOneImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/large-slider/five.png",
  },
];

const rowTwoImages = [
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/one.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/two.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/three.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/four.png",
  },
  {
    url: "https://pixner.net/aikeu/assets/images/banner/small-slider/five.png",
  },
];

const Hero = (props: Props) => {
  const [mounted, setmounted] = useState(false);

  useEffect(() => {
    if (!mounted) {
      setmounted(true);
    }
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <div className="w-full md:min-h-screen flex items-center justify-center">
      <div>
        <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
          <span className="text-[#64FF4B]">Abhishek Thory</span> <br />
          Full Stack Developer
        </h1>
        <div className="flex gap-5 justify-center items-center text-2xl">
          <span className=" hover:text-[#64FF4B] cursor-pointer">
            <FaGithub />
          </span>
          <span className=" hover:text-[#64FF4B] cursor-pointer">
            <FaTwitter />
          </span>
          <span className=" hover:text-[#64FF4B] cursor-pointer">
            <FaLinkedin />
          </span>
          <span className=" hover:text-[#64FF4B] cursor-pointer">
            <FaYoutube />
          </span>
        </div>
        <div className="md:mt-5">
          <Image
            src={"/assets/line.png"}
            alt=""
            className="absolute  md:block"
            width={2000}
            height={2}
          />
        </div>

        <div className="w-[100vw] mb-5 md:mb-20 relative">
          <div className="rotate-[-4deg] mt-10 md:mt-[6.5rem]">
            <MarQuee pauseOnClick={true} pauseOnHover={true} direction="right" >
              {rowTwoImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px] cursor-pointer"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
            <MarQuee pauseOnClick={true} direction="left" pauseOnHover={true}>
              {rowOneImages.map((i, index) => (
                <Image
                  src={i.url}
                  key={index}
                  alt=""
                  className="md:m-4 w-[200px] m-2 md:w-[500px] rounded-[20px] cursor-pointer"
                  width={500}
                  height={300}
                />
              ))}
            </MarQuee>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
