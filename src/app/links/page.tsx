import Link from 'next/link'
import React from 'react'
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Image from "next/image";
import { HelloDetails } from '@/components/Sections/Hero';


function Links() {
    return (
        <main className='hello-section'>
            <div className="w-full min-h-screen flex items-center justify-center">
                <div>
                    <HelloDetails />
                </div>
            </div>
        </main>

    )
}

export default Links