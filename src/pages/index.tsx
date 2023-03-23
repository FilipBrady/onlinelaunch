import ConparisonSection from '@/components/comparison section/ConparisonSection';
import ContactSection from '@/components/contact section/ContactSection';
import ContentCards from '@/components/contact section/contenc cards/ContentCards';
import ForWho from '@/components/for who section/ForWho';
import FreeConsultation from '@/components/free consultation section/FreeConsultation';
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
      <ForWho />
      <LandingPage />
      <OnlineMarketing />
      <ContentCards />
      <ConparisonSection />
      <FreeConsultation/>
      {/* <ContactSection/> */}
    </div>
  );
}
