import LandingPage from '@/components/landing page/LandingPage';
import Navigation from '@/components/navigation/Navigation';
// import '../styles/globals.css'
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Navigation />
      <LandingPage/>
    </div>
  );
}
