"use client"
import Footer from '@/components/Sections/Footer'
import Header from '@/components/Sections/Header'
import Hero from '@/components/Sections/Hero'
import { Divider } from '@nextui-org/react'

import { freelanceProjects, opensourceProjects, personalProjects } from '@/assests/data/projectsData'

import Reviews from '@/components/Sections/Reviews'
import ProjectsCarousel from '@/components/Sections/ProjectsCarousel'
import Image from 'next/image'



export default function Home() {



  return (
    <main className="">

      <div className="banner" id='hello'>
        <Header activeItem={0} />
        <Hero />
      </div>

      <ProjectsCarousel projects={personalProjects} heading='Personal Projects' />
      <ProjectsCarousel projects={freelanceProjects} heading='Freelance Projects (60+ Overall)' />
      <ProjectsCarousel projects={opensourceProjects} heading='Opensource Projects' carouselSettings={{ slidesToScroll: 1, slidesToShow: 2, }} />


      <Divider className="bg-divider" />
      <Reviews />
      <Footer />
    </main >
  )
}
