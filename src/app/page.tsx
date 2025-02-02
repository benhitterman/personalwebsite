import Profile from "./components/Profile";
import Resume from "./components/Resume";
import { DM_Sans } from 'next/font/google';
//import Link from 'next/link';


const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
    <main>
      <nav>
        
      </nav>
      <div className={`${dmSans.className} min-h-screen bg-[#fffbf5] grid grid-cols-1 md:grid-cols-2 p-4 pt-8 gap-4`}>
        <Profile />
        <Resume />
      </div>
    </main>
  );
}
