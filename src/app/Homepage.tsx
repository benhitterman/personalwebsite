import Image from 'next/image';
import placeholder from './assets/placeholder.jpg';

const Homepage = () => {

    return (
        <div className="bg-white text-black">
            <div className="container mx-auto p-4">
                <Image
                    src={placeholder}
                    alt="Profile Picture"
                    width={200}
                    height={200}
                />
                <h1>I'm Ben Hitterman</h1>
                <p>Software Developer based in Montreal, Canada</p>
            </div>
        </div>
    )

}

export default Homepage;