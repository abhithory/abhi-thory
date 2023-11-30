"use client"
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import { styles } from '@/styles/styles'
import { Divider } from '@nextui-org/react'

import { freelanceProjects, opensourceProjects, personalProjects } from '@/assests/data/projectsData'
import ProjectCard from '@/components/Cards/ProjectCard';

import Slider from "react-slick";

import Reviews from '@/components/Sections/Reviews'
import CarouselContainer from '@/components/CarouselContainer'
import Loader from '@/components/Loader/Loader'



export default function Home() {



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


      <div className="w-[100%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
        <h1 className={`${styles.heading} p-2 font-Monserrat`}>
          Personal Projects
        </h1>

        <CarouselContainer>


          {Object.keys(personalProjects).map((key, index) => {
            const item = personalProjects[key as keyof typeof personalProjects];
            return (
              <ProjectCard projectDetail={item} classNames='mx-auto' key={index} />
            );
          })}
        </CarouselContainer>
      </div>

      <div className="w-[100%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
        <h1 className={`${styles.heading} p-2 font-Monserrat`}>
          Freelance Projects (60+ Overall)
        </h1>

        <CarouselContainer>
          {Object.keys(freelanceProjects).map((key, index) => {
            const item = freelanceProjects[key as keyof typeof freelanceProjects];
            return (
              <ProjectCard projectDetail={item} classNames='mx-auto' key={index} />
            );
          })}
        </CarouselContainer>
      </div>
      <div className="w-[100%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
        <h1 className={`${styles.heading} p-2 font-Monserrat`}>
          Opensource Projects
        </h1>

        <CarouselContainer settings={{ slidesToScroll: 1, slidesToShow: 2, }}>
          {Object.keys(opensourceProjects).map((key, index) => {
            const item = opensourceProjects[key as keyof typeof opensourceProjects];
            return (
              <ProjectCard projectDetail={item} classNames='mx-auto' key={index} />
            );
          })}
        </CarouselContainer>
      </div>
      <Divider className="bg-divider" />
      <Reviews />
      <Footer />
    </main >
  )
}
