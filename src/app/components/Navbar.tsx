import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-[#fffbf5] text-black">
            <div className="container mx-4 p-4 pb-14 pt-7 grid grid-cols-1 md:grid-cols-3">
                <ul className="flex justify-between">
                    <li>
                        <Link href="/">
                            Ben
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="/projects">
                            Projects
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;