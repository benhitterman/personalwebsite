import Image from 'next/image';
import placeholder from '../assets/placeholder.jpg';

export default function Profile() {
    return (
        <div className="bg-[#fffbf5] text-black">
            <div className="container mx-auto p-4">
                <Image
                    className='rounded-3xl'
                    src={placeholder}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                />
                <h1 className='text-4xl pt-4 font-bold'>I&apos;m Ben Hitterman</h1>
                <p className='pt-1'>Passionate Software Developer based in Montreal, Canada</p>
            </div>
        </div>
    )
}