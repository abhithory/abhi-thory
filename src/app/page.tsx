"use client"
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import { styles } from '@/styles/styles'
import { Divider } from '@nextui-org/react'

import MarQuee from "react-fast-marquee";
import { freelanceProjects, opensourceProjects, personalProjects } from '@/assests/data/projectsData'
import ProjectCard from '@/components/Cards/ProjectCard';

import Slider from "react-slick";

import Image from "next/image";
import Reviews from '@/components/Sections/Reviews'



export default function Home() {

  const settings = {
    dots: true,
    className: "center",
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    // appendDots: (dots: any) => (
    //   <div
    //     style={{
    //       borderRadius: "10px",
    //       padding: "10px",
    //       margin: "1rem",

    //     }}
    //   >
    //     <ul style={{ margin: "2px" }}> {dots} </ul>
    //   </div>
    // ),
    // customPaging: (i: any) => (
    //   <div
    //     style={{
    //       width: "30px",
    //       color: "blue",
    //       border: "1px blue solid",
    //       margin: "1rem",

    //     }}
    //   >
    //     1
    //   </div>
    // )
  };



  return (
    <main className="">

      <div className="banner" id='hello'>
        <Header activeItem={0} />
        <Hero />
      </div>
      {/* <Image
        src={"https://pixner.net/aikeu/assets/images/footer/shape-two.png"}
        width={120}
        height={120}
        alt=""
        className="absolute right-[-30px]"
      /> */}


      <div className="w-[95%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
        <h1 className={`${styles.heading} p-2 font-Monserrat`}>
          Personal Projects
        </h1>

        <Slider {...settings}>
          {Object.keys(personalProjects).map((key, index) => {
            const item = personalProjects[key as keyof typeof personalProjects];
            return (
              <ProjectCard projectDetail={item} key={index} />
            );
          })}
        </Slider>
      </div>

      <div className="w-[95%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
        <h1 className={`${styles.heading} p-2 font-Monserrat`}>
          Freelance Projects (60+ Overall)
        </h1>

        <Slider {...settings}>
          {Object.keys(freelanceProjects).map((key, index) => {
            const item = freelanceProjects[key as keyof typeof freelanceProjects];
            return (
              <ProjectCard projectDetail={item} key={index} />
            );
          })}
        </Slider>
      </div>
      <div className="w-[95%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
        <h1 className={`${styles.heading} p-2 font-Monserrat`}>
          Opensource Projects
        </h1>

        <Slider {...settings}>
          {Object.keys(opensourceProjects).map((key, index) => {
            const item = opensourceProjects[key as keyof typeof opensourceProjects];
            return (
              <ProjectCard projectDetail={item} key={index} />
            );
          })}
        </Slider>
      </div>
      <Divider className="bg-divider" />
      <Reviews />

      <Footer />
    </main >
  )
}
