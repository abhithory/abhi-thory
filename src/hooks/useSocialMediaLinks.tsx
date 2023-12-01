import Link from 'next/link';
import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaTelegram, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";

export default function useSocialMediaLinks() {
    const socialLinks = {
        telegram: {
            link: "https://t.me/abhi_thory",
            icon: <FaTelegram />
        },
        linkedin: {
            link: "https://www.linkedin.com/in/abhithory/",
            icon: <FaLinkedin />
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

        whatsapp: {
            link: "https://www.whatsapp.com/channel/0029VaAAtHYDTkKAYXlQjn2y",
            icon: <FaWhatsapp />
        },
        email: {
            link: "mailto:abhishekthory001@gmail.com", // Replace with your email address
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
