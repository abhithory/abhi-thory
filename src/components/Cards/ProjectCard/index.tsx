import React from 'react';
import {
  Image,
  Button,
  Divider,
  Link,
  Chip,
  ScrollShadow,
} from '@nextui-org/react';
import { styles } from '@/styles/styles';
import { FaGithub } from 'react-icons/fa';
import { ProjectDataType } from '@/assests/data/projectsData';

type ProjectCardProps = {
  projectDetail: ProjectDataType;
  classNames?: string;
};

export default function ProjectCard({
  projectDetail,
  classNames,
}: ProjectCardProps) {
  return (
    <div
      className={`w-[320px] overflow-hidden  rounded-xl border-none bg-background/60 p-3 shadow-lg md:w-[400px] ${classNames}`}
    >
      <div className="relative">
        <Image
          src={projectDetail.image}
          alt=""
          className="!max-h-[200px] w-full object-cover"
          width={390}
          height={300}
        />
      </div>
      <div className="mt-2 w-full justify-between">
        <h3 className={`${styles.label} h-[3.4rem] text-[18px] text-white`}>
          {projectDetail.name}
        </h3>
        <ScrollShadow hideScrollBar className="h-16">
          <p className={`font-[6px] text-white `}>{projectDetail.des}</p>
        </ScrollShadow>
      </div>

      <Divider className="my-3 bg-[#ffffff18]" />
      <div className="flex flex-wrap gap-2">
        {projectDetail.skills?.map((skill, index) => {
          return (
            <Chip
              key={index}
              color="warning"
              variant="solid"
              radius="md"
              startContent={skill.icon}
            >
              {skill.name}
            </Chip>
          );
        })}
      </div>

      <Divider className="my-3 bg-[#ffffff18]" />
      <div className="flex w-full justify-between px-4">
        <Link href={projectDetail.github} target="_blank">
          <Button isIconOnly color="primary" variant="bordered">
            <FaGithub />
          </Button>
        </Link>
        <Link href={projectDetail.demo} target="_blank">
          <Button color="primary" variant="bordered" href={projectDetail.demo}>
            Demo
          </Button>
        </Link>
      </div>
    </div>
  );
}
