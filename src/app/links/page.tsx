import { socialLinks } from '@/styles/links'
import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "next/image";


function Links() {
    return (
        <main className='banner'>
            <div className="w-full min-h-screen flex items-center justify-center">
                <div>
                    <h1 className="font-Monserrat text-4xl py-5 xl:text-7xl 2xl:text-8xl font-[700] text-center xl:leading-[80px] 2xl:leading-[100px] sm:mt-20">
                        <span className="text-primary">Abhishek Thory</span> <br />
                        Full Stack Developer
                    </h1>
                    <div className="flex gap-5 justify-center items-center text-2xl sm:text-3xl xl:text-4xl 2xl:text-5xl mt-6">
                        <Link href={socialLinks.github} target="_blank" className=" hover:text-primary">
                            <FaGithub />
                        </Link>
                        <Link href={socialLinks.twitter} target="_blank" className=" hover:text-primary">
                            <FaTwitter />
                        </Link>
                        <Link href={socialLinks.whatsapp} target="_blank" className=" hover:text-primary">
                            <FaEnvelope />
                        </Link>
                        <Link href={socialLinks.linkedin} target="_blank" className=" hover:text-primary">
                            <FaLinkedin />
                        </Link>
                        <Link href={socialLinks.youtube} target="_blank" className=" hover:text-primary">
                            <FaYoutube />
                        </Link>
                        <Link href={socialLinks.whatsapp} target="_blank" className=" hover:text-primary">
                            <FaWhatsapp />
                        </Link>
                        <Link href={socialLinks.whatsapp} target="_blank" className=" hover:text-primary">
                            <FaEnvelope />
                        </Link>
                    </div>
                    <div className="md:mt-5">
                        <Image
                            src={"/assets/line.png"}
                            alt=""
                            className="absolute  md:block"
                            width={2000}
                            height={2}
                        />
                    </div>
                </div>
            </div>
        </main>

    )
}

export default Links