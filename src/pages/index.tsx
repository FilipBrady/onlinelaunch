import ContactSection from '@/components/contact section/ContactSection';
import LandingPage from '@/components/landing page/LandingPage';
import Navigation from '@/components/navigation/Navigation';
import OnlineMarketing from '@/components/online marketing/OnlineMarketing';
// import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Head from 'next/head';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Navigation />
      <LandingPage/>
      <OnlineMarketing />
      {/* <ContactSection/> */}
    </div>
  );
}
