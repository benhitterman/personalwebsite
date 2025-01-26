import Homepage from "./Homepage.tsx";
import Resume from "./components/Resume.tsx";
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export default function Home() {
  return (
      <div className={`${roboto.className} min-h-screen bg-[#fffbf5] grid grid-cols-1 md:grid-cols-2 p-4 gap-4`}>
      <Homepage />
      <Resume />
    </div>
  );
}
