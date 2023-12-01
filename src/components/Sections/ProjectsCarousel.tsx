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
        <div className="w-[98%] md:w-[90%] 2xl:w-[85%] mx-auto my-12">
            <h1 className={`animate_charcter p-2 font-Monserrat text_sub_heading_size font-semibold `}>
                {heading}
            </h1>
            <CarouselContainer settings={carouselSettings} >
                {Object.keys(projects).map((key, index) => {
                    const item = projects[key as keyof typeof projects];
                    return (
                        <div className="mx-auto" key={index} >
                            <ProjectCard projectDetail={item} classNames='mx-auto' key={index} />
                        </div>
                    );
                })}
            </CarouselContainer>
        </div>
    )
}
