import Profile from "./components/Profile";
import Resume from "./components/Resume";
import { Roboto } from 'next/font/google';
//import Link from 'next/link';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <main>
      <nav>
        
      </nav>
      <div className={`${roboto.className} min-h-screen bg-[#fffbf5] grid grid-cols-1 md:grid-cols-2 p-4 gap-4`}>
        <Profile />
        <Resume />
      </div>
    </main>
  );
}
