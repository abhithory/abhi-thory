import React from "react";
import { Card, CardBody, Image, Button, Slider, Divider, Avatar, Link, Chip, CardFooter, ScrollShadow } from "@nextui-org/react";
import { styles } from "@/styles/styles";
import { FaGithub } from "react-icons/fa";
import { ProjectDataType } from "@/assests/data/projectsData";


type ProjectCardProps = {
    projectDetail: ProjectDataType;
    classNames?: string;
}

export default function ProjectCard({ projectDetail, classNames }: ProjectCardProps) {

    return (
        <div
            className={`border-none bg-background/60  shadow-lg overflow-hidden rounded-xl p-3 w-[320px] md:w-[400px] ${classNames}`}
        >
            <div className="relative">
                <Image
                    src={projectDetail.image}
                    alt=""
                    className="w-full !max-h-[200px] object-cover"
                    width={390}
                    height={300}
                />
            </div>
            <div className="w-full justify-between mt-2">
                <h3 className={`${styles.label} text-[18px] text-white h-[3.4rem]`}>
                    {projectDetail.name}
                </h3>
                <ScrollShadow hideScrollBar className="h-16">
                    <p className={`font-[6px] text-white `}>{projectDetail.des}</p>
                </ScrollShadow>
            </div>

            <Divider className="bg-[#ffffff18] my-3" />
            <div className="flex gap-2 flex-wrap">

                {projectDetail.skills?.map((skill, index) => {
                    return (
                        <Chip key={index} color="warning" variant="solid" radius="md" startContent={skill.icon}>{skill.name}</Chip>
                    )
                })}
            </div>

            <Divider className="bg-[#ffffff18] my-3" />
            <div className="flex justify-between px-4 w-full">
                <Button isIconOnly color="primary" variant="bordered">
                    <FaGithub />
                </Button>
                <Button color="primary" variant="bordered">
                    <Link href={`/prompt/`} className="w-full">
                        Demo
                    </Link>
                </Button>
            </div>

        </div>
    );
}
