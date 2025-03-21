import Image from 'next/image'
import React from 'react'

const ExperienceSection: React.FC = () => {
    return (
        <>
            <section id="experience" className="py-20 text-white">
                <div className="container mx-auto px-6">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Professional Experience</h2>
                    <div className="max-w-3xl mx-auto space-y-12">
                        <div className="flex gap-8">
                            <div className="w-32 flex-shrink-0">
                                <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center">
                                    <Image src="/images/hlink.png" alt="Work" width={60} height={60} />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-2">Software Developer</h3>
                                <p className="text-primary mb-2">Hyperlink Infosystem</p>
                                <p className="text-white-600 mb-4">2022 - Present</p>
                                <ul className="list-disc list-inside text-white-600 space-y-2">
                                    <li>Built and maintained web applications</li>
                                    <li>Implemented RESTful APIs and integrated third-party services</li>
                                    <li>Developed and maintained databases</li>
                                    <li>Improved system reliability and performance</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExperienceSection
