import Image from 'next/image';
import UbiLogo from '../assets/UbiLogo.svg';
import ACLogo from '../assets/ACLogo.svg';
import emailLogo from '../assets/emailLogo.svg';
import GitHubLogo from '../assets/GitHubLogo.svg';
import LinkedInLogo from '../assets/LinkedInLogo.svg';
import EduLogo from '../assets/EduLogo.svg';
import TripWise from '../assets/TripWise.png';
import ClientWebsite from '../assets/ClientWebsite.gif';

export default async function Resume() {
    return (
        <div className="bg-[#fffbf5] text-black">
            <div className="container mx-auto p-4">
                <p className="text-3xl pr-20">Passionate software developer, always learning and building impactful projects.</p>
            </div>
            <div className="container mx-auto p-4">
                <a
                    href="mailto:benhitterman7@gmail.com"
                    className="bg-[#fffbf5] hover:bg-[#ebe7e1] rounded-full px-5 py-3 mr-3 border-2 border-black border-solid inline-flex">
                    <Image
                        src={emailLogo}
                        alt="Email Logo"
                        className="w-6 h-6 transition-transform duration-200 ease-in-out hover:scale-125"
                    />
                </a>
                <a
                    href="https://github.com/benhitterman"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fffbf5] hover:bg-[#ebe7e1] rounded-full px-5 py-3 mr-3 border-2 border-black border-solid inline-flex">
                    <Image
                        src={GitHubLogo}
                        alt="Github Logo"
                        className="w-6 h-6 transition-transform duration-200 ease-in-out hover:scale-125"
                    />
                </a>
                <a
                    href="https://www.linkedin.com/in/ben-hitterman-b39b8a20a/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#fffbf5] hover:bg-[#ebe7e1] rounded-full px-5 py-3 border-2 border-black border-solid inline-flex">
                    <Image
                        src={LinkedInLogo}
                        alt="LinkedIn Logo"
                        className="w-6 h-6 transition-transform duration-200 ease-in-out hover:scale-125"
                    />
                </a>
            </div>
            <hr className="mt-5 mx-4" />
            <div className="container mx-auto px-4 py-1">
                <p className="text-4xl py-4">Working Experience</p>
                <div className="w-72 md:w-auto rounded-3xl bg-white border-2 border-black border-solid py-2 pl-3 flex flex-col md:grid md:grid-cols-[auto,auto,1fr] gap-3 mr-16 mb-2">
                    <div className="w-16 h-16 bg-[#fffbf5] flex rounded-full items-center justify-center mx-auto md:mx-0">
                        <Image
                            src={UbiLogo}
                            alt="Ubisoft Logo"
                            className="w-12 h-12"
                        />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <p className="text-xl">Frontend Web Developer</p>
                        <p className="text-lg font-bold">Ubisoft</p>
                    </div>
                    <p className="flex items-center justify-center text-sm text-gray-400">Jan 2023 - Sep 2023, Sep 2024 - Present</p>
                </div>
                <div className="w-72 md:w-auto rounded-3xl bg-white border-2 border-black border-solid py-2 pl-3 flex flex-col md:grid md:grid-cols-[auto,auto,1fr] gap-3 mr-16 mb-2">
                    <div className="w-16 h-16 bg-[#fffbf5] flex rounded-full items-center justify-center mx-auto md:mx-0">
                    <Image
                        src={ACLogo}
                        alt="Air Canada Logo"
                        className="w-12 h-12"
                    />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <p className="text-xl">QE Process Analyst Intern</p>
                        <p className="text-lg font-bold">Air Canada</p>
                    </div>
                    <p className="flex items-center justify-center text-sm text-gray-400">Sep 2021 - Dec 2021</p>
                </div>
            </div>
            <hr className="mt-5 mx-4" />
            <div className="container mx-auto px-4">
                <p className="text-4xl py-4">Education</p>
                <div className="w-72 md:w-auto rounded-3xl bg-white border-2 border-black border-solid py-2 pl-3 flex flex-col md:grid md:grid-cols-[auto,auto,1fr] gap-3 mr-16 mb-2">
                    <div className="w-16 h-16 bg-[#fffbf5] flex rounded-full items-center justify-center mx-auto md:mx-0">
                        <Image
                            src={EduLogo}
                            alt="Book Image"
                            className="w-12 h-12"
                        />
                    </div>
                    <div className="flex flex-col justify-center text-center md:text-left">
                        <p className="text-lg">Bachelor&apos;s of Engineering, Computer Engineering</p>
                        <p className="text-base font-bold">Concordia Univeristy, Montreal</p>
                    </div>
                    <p className="flex items-center justify-center text-sm text-gray-400">Sep 2020 - Apr 2024</p>
                </div>
            </div>
            <hr className="mt-5 mx-4" />
            <div className="container mx-auto px-4">
                <p className="text-4xl py-4">Selected Works</p>
                <div className="w-72 md:w-auto rounded-3xl bg-white border-2 border-black border-solid p-4 flex flex-col md:flex-row items-center gap-3 mr-16 mb-2">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <Image
                            src={TripWise}
                            alt="TripWise Image"
                            className="w-full max-w-[250px] h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                        <p className="text-lg">Trip planner application that uses artificial intelligence to learn the user and offer
                        best-tailored activities to fit into their free time.</p>
                        <p className="text-base font-bold mt-2">React Native, JavaScript/TypeScript, Tailwind CSS</p>
                    </div>
                </div>
                <div className="w-72 md:w-auto rounded-3xl bg-white border-2 border-black border-solid p-4 flex flex-col md:flex-row items-center gap-3 mr-16 mb-2">
                    <div className="w-full md:w-1/3 flex justify-center md:justify-start">
                        <Image
                            src={ClientWebsite}
                            alt="Client Website GIF"
                            className="w-full max-w-[250px] h-auto object-cover rounded-lg"
                        />
                    </div>
                    <div className="w-full md:w-2/3 flex flex-col justify-center text-center md:text-left">
                        <p className="text-lg">Website for a marketing company that manages the online reputation of the automotive industry.</p>
                        <p className="text-base font-bold mt-2">React, JavaScript/TypeScript, Tailwind CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}