import React from 'react'
import { AnimatedTestimonials } from './ui/animated-testimonials';

const ProjectSection: React.FC = () => {

    const projects = [
        {
            id: 1,
            name: "Job Managing Platform",
            tech_stack: "Nodejs, Express, MongoDB, React, TypeScript",
            description: "Developed a job management system with APIs and a user panel, allowing users to post job openings and apply. Automated email notifications are sent to HR upon application.",
            src: "/images/building.jpg",
            link: "#",
            github: "#",
        },
        {
            id: 2,
            name: "Portfolio",
            tech_stack: "React, Next.js",
            description: "A modern and responsive personal portfolio displaying skills, projects and professional experience with an elegant UI/UX design and aceternity UI component.",
            src: "/images/self.png",
            link: "https://dhanjibhagat.vercel.app/",
            github: "https://github.com/dhanji4U/portfolio.git",
        },
        {
            id: 3,
            name: "Crypto Vault",
            tech_stack: "React, Vite",
            description: "An AI-generated website providing encryption and decryption functionalities using CryptoJS for enhanced security.",
            src: "/images/cryptojs.png",
            link: "https://cryptovault-zeta.vercel.app/",
            github: "#",
        },
    ];

    return (
        <>
            <section id="projects">
                <h2 className="text-center text-4xl font-bold text-white mt-5 mb-8 md:mb-12">
                    My Projects
                </h2>
                <div className="text-white flex flex-row justify-center items-center gap-2">
                    <AnimatedTestimonials testimonials={projects} />
                </div>
            </section>
        </>
    )
}

export default ProjectSection
