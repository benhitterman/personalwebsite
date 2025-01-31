import UbiLogo from '../assets/UbiLogo.svg';
import ACLogo from '../assets/ACLogo.svg';
import Image from 'next/image';

export default async function Resume() {
    return (
        <div className="bg-[#fffbf5] text-black">
            <div className="container mx-auto p-4">
                <p className="text-3xl pr-20">Passionate software developer, always learning and building impactful projects.</p>
            </div>
            <div className="container mx-auto p-4">
                <button className="bg-black hover:bg-[#fffbf5] text-[#fffbf5] hover:text-black rounded-full px-5 py-3 mr-8 border-2 border-black border-solid">Talk with me</button>
                <button className="bg-[#fffbf5] hover:bg-black text-black hover:text-[#fffbf5] rounded-full px-5 py-3 border-2 border-black border-solid">See my work</button>
            </div>
            <hr className="mt-10 mx-4" />
            <div className="container mx-auto px-4 py-1">
                <p className="text-4xl py-4">Working Experience</p>
                <div className="w-auto rounded-full bg-white border-2 border-black border-solid py-2 pl-3 grid grid-cols-1 md:grid-cols-[auto,auto,1fr] gap-3 mr-16 mb-2">
                    <div className="w-16 h-16 bg-[#fffbf5] flex rounded-full items-center justify-center">
                        <Image
                            src={UbiLogo}
                            alt="Ubisoft Logo"
                            className="w-12 h-12"
                        />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-xl">Frontend Web Developer</p>
                        <p className="text-lg font-bold">Ubisoft</p>
                    </div>
                    <p className="flex items-center justify-center text-sm text-gray-400">Jan 2023 - Sep 2023, Sep 2024 - Present</p>
                </div>
                <div className="w-auto rounded-full bg-white border-2 border-black border-solid py-2 pl-3 grid grid-cols-1 md:grid-cols-[auto,auto,1fr] gap-3 mr-16">
                    <div className="w-16 h-16 bg-[#fffbf5] flex rounded-full items-center justify-center">
                    <Image
                        src={ACLogo}
                        alt="Air Canada Logo"
                        className="w-12 h-12"
                    />
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="text-xl">QE Process Analyst Intern</p>
                        <p className="text-lg font-bold">Air Canada</p>
                    </div>
                    <p className="flex items-center justify-center text-sm text-gray-400">Sep 2021 - Dec 2021</p>
                </div>
            </div>
            <hr className="mt-10 mx-4" />
            <div className="container mx-auto px-4">
                <p className="text-4xl py-4">Selected Works</p>
                <div className="bg-white rounded-full border-2 border-black border-solid py-2 pl-4 grid grid-rows-3 gap-5 mr-16">
                    
                </div>
            </div>
        </div>
    )
}