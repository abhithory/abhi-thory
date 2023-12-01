"use client"
import Footer from '@/components/Layout/Footer'
import Header from '@/components/Layout/Header'
import Hero from '@/components/Route/Hero'
import { Divider } from '@nextui-org/react'

import { freelanceProjects, opensourceProjects, personalProjects } from '@/assests/data/projectsData'

import Reviews from '@/components/Sections/Reviews'
import ProjectsCarousel from '@/components/Sections/ProjectsCarousel'



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


      <ProjectsCarousel projects={personalProjects} heading='Personal Projects' />
      <ProjectsCarousel projects={freelanceProjects} heading='Freelance Projects (60+ Overall)' />
      <ProjectsCarousel projects={opensourceProjects} heading='Opensource Projects' carouselSettings={{ slidesToScroll: 1, slidesToShow: 2, }} />


      <Divider className="bg-divider" />
      <Reviews />
      <Footer />
    </main >
  )
}
