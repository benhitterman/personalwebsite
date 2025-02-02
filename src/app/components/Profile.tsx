import Image from 'next/image';
import Headshot from '../assets/Headshot.jpg';

export default function Profile() {
    return (
        <div className="bg-[#fffbf5] text-black">
            <div className="container mx-auto p-4">
                <Image
                    className='rounded-3xl'
                    src={Headshot}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                />
                <h1 className='text-3xl pt-4 font-bold'>I&apos;m Ben Hitterman</h1>
                <p className='pt-1'>Based in Montreal, Canada</p>
            </div>
        </div>
    )
}