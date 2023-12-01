import { ProjectsObjectType } from '@/assests/data/projectsData'
import React from 'react'
import CarouselContainer from '../CarouselContainer';
import ProjectCard from '../Cards/ProjectCard';

type Props = {
    projects: ProjectsObjectType;
    heading?: string;
    carouselSettings?: {}
}

export default function ProjectsCarousel({ projects, heading, carouselSettings }: Props) {
    return (
        <div className="w-[100%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
            <h1 className={` p-2 font-Monserrat`}>
                {heading}
            </h1>
            <CarouselContainer settings={carouselSettings}>
                {Object.keys(projects).map((key, index) => {
                    const item = projects[key as keyof typeof projects];
                    return (
                        <ProjectCard projectDetail={item} classNames='mx-auto' key={index} />
                    );
                })}
            </CarouselContainer>
        </div>
    )
}
