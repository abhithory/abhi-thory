import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function useSocialMediaLinks() {
    const socialLinks = {
        whatsapp: {
            link: "https://www.whatsapp.com/channel/0029VaAAtHYDTkKAYXlQjn2y",
            icon: <FaWhatsapp />
        },
        github: {
            link: "https://github.com/abhithory",
            icon: <FaGithub />
        },
        twitter: {
            link: "https://twitter.com/abhithory",
            icon: <FaTwitter />
        },
        youtube: {
            link: "https://www.youtube.com/@abhithory",
            icon: <FaYoutube />
        },
        linkedin: {
            link: "https://www.linkedin.com/in/abhithory/",
            icon: <FaLinkedin />
        },
        email: {
            link: "mailto:your.email@example.com", // Replace with your email address
            icon: <FaEnvelope />
        }
    };

    const renderSocialMediaLinks = () => {
        return Object.keys(socialLinks).map((key) => {
            const item = socialLinks[key as keyof typeof socialLinks];
            return (
                <Link key={key} href={item.link} target={key === 'email' ? '_self' : '_blank'} className="hover:text-primary">
                    {item.icon}
                </Link>
            );
        });
    };

    return {
        renderSocialMediaLinks
    };
}
