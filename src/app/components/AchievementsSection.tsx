'use client'; // Ensures this is a Client Component
import React from 'react';
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(
    () => import('react-animated-numbers'),
    { ssr: false }
);

const AchievementsSection: React.FC = () => {

    const achievementsList = [
        {
            id: 1,
            metric: "Projects",
            value: "3",
            // postfix: "+",
        },
        {
            id: 2,
            metric: "User",
            value: "1",
        },
        // {
        //     id: 3,
        //     metric: "Awards",
        //     value: "7",
        // },
        {
            id: 3,
            metric: "Years",
            value: "3",
        },
    ];

    return (
        <>
            <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
                <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
                    {achievementsList.map((achievement, index) => {
                        return (
                            <div
                                key={achievement.id}
                                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                            >
                                <h2 className="text-white text-4xl font-bold flex flex-row">
                                    {/* {achievement.prefix} */}
                                    <AnimatedNumbers
                                        includeComma
                                        animateToNumber={parseInt(achievement.value)}
                                        locale="en-US"
                                        className="text-white text-4xl font-bold"
                                    />
                                    {/* {achievement.postfix} */}
                                </h2>
                                <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default AchievementsSection
