import React from "react";
import { Card, CardBody, Image, Button, Slider, Divider, Avatar, Link, Chip, CardFooter, ScrollShadow } from "@nextui-org/react";
import { styles } from "@/styles/styles";
import { FaConnectdevelop, FaGithub } from "react-icons/fa";
import { GrGithub } from "react-icons/gr";
import { TbBrandNextjs, TbBrandTailwind, TbBrandTypescript } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { SiSolidity } from "react-icons/si";

type ProjectData = {
    name: string;
    des: string;
    demo: string;
    github: string;
    image: string;
    video?: string;
}

type ProjectCardProps = {
    projectDetail: ProjectData;
}

export default function ProjectCard({ projectDetail }: ProjectCardProps) {

    return (
        <>
            <div
                className="border-none bg-background/60 w-[400px] shadow-lg overflow-hidden rounded-lg p-2"
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
                    <Chip color="warning" variant="solid" radius="md" startContent={<TbBrandNextjs />}>Nextjs</Chip>
                    <Chip color="warning" variant="solid" radius="md" startContent={<BiLogoTypescript />}>Typescript</Chip>
                    <Chip color="warning" variant="solid" radius="md" startContent={<TbBrandTailwind />}>TailwindCss</Chip>
                    <Chip color="warning" variant="solid" radius="md" startContent={<SiSolidity />}>Solidity</Chip>
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
        </>
    );
}
