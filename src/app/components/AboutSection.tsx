'use client';
import React, { useState, useTransition } from 'react'
import Image from 'next/image'
import TabButton from './ui/TabButton'

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <div className="flex flex-row gap-10">
                <ul className="list-disc pl-2">
                    <li>JavaScript</li>
                    <li>React.js</li>
                    <li>Redux</li>
                    <li>Next.js</li>
                    <li>TypeScript</li>
                </ul>
                <ul className="list-disc pl-2">
                    <li>Node.js</li>
                    <li>Express</li>
                    <li>PHP Codelgniter</li>
                </ul>
                <ul className="list-disc pl-2">
                    <li>MySQL</li>
                    <li>MongoDB</li>
                </ul>
                <ul className="list-disc pl-2">
                    <li>GitLab</li>
                    <li>Github</li>
                </ul>
            </div>
        ),
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Bachelor of Engineering in Information Technology</li>
                <li>Diploma of Engineering in Information Technology</li>
            </ul>
        ),
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>AWS Cloud Practitioner</li>
                <li>Google Professional Cloud Developer</li>
            </ul>
        ),
    },
];

const AboutSection: React.FC = () => {

    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id);
        });
    };


    return (
        <>
            <section className="text-white" id="about">
                <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                    <Image src="/images/about-image.png" alt='about-profile' width={500} height={500} />
                    <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                        <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
                        <p className="text-base lg:text-lg text-justify">
                            I am a software engineer with a passion for building scalable, high-performance web applications that seamlessly blend backend efficiency with intuitive user experiences. My work lies at the intersection of API development and frontend integration, ensuring that applications are not only functional but also optimized for performance, security, and usability.

                            Currently, I hands-on experience in Node.js, React.js, Express.js, MySQL, and MongoDB, developing robust RESTful APIs, web apps, and database-driven applications. I focus on delivering reliable and efficient solutions. I am always dedicated to continuous learning.</p>
                        <div className="flex flex-row justify-start mt-8">
                            <TabButton
                                selectTab={() => handleTabChange("skills")}
                                active={tab === "skills"}
                            >
                                {" "}
                                Skills{" "}
                            </TabButton>
                            <TabButton
                                selectTab={() => handleTabChange("education")}
                                active={tab === "education"}
                            >
                                {" "}
                                Education{" "}
                            </TabButton>
                            {/* <TabButton
                                selectTab={() => handleTabChange("certifications")}
                                active={tab === "certifications"}
                            >
                                {" "}
                                Certifications{" "}
                            </TabButton> */}
                        </div>
                        <div className="mt-8">
                            {TAB_DATA.find((t) => t.id === tab)?.content || <p>No content available</p>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutSection
