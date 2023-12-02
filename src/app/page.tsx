import Footer from "@/components/Sections/Footer";
import Hero from "@/components/Sections/Hero";
import { Divider } from "@nextui-org/react";

import {
  freelanceProjects,
  opensourceProjects,
  personalProjects,
} from "@/assests/data/projectsData";

import Reviews from "@/components/Sections/Reviews";
import ProjectsCarousel from "@/components/Sections/ProjectsCarousel";
import Navigation from "@/components/Navigation/Navigation";
import { Abhi } from "@/components/Sections/Abhi";

export default function Home() {
  return (
    <main>
      <div className="hello-section" id="hello">
        <Navigation />
        <Hero />
      </div>
      <Reviews />

      <ProjectsCarousel
        projects={personalProjects}
        heading="Personal Projects"
      />
      <ProjectsCarousel
        projects={freelanceProjects}
        heading="Freelance Projects (60+ Overall)"
      />
      <ProjectsCarousel
        projects={opensourceProjects}
        heading="Opensource Projects"
        carouselSettings={{ slidesToScroll: 1, slidesToShow: 2 }}
      />

      <Divider className="bg-divider" />
      <Abhi />
      <Footer />
    </main>
  );
}
