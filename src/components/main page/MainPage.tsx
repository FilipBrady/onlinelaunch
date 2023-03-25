import ConparisonSection from '../comparison section/ConparisonSection';
import Consultation from '../consultation section/Consultation';
import ContactSection from '../contact section/ContactSection';
import ContentCards from '../content cards/ContentCards';
import FooterSection from '../footer section/FooterSection';
import ForWho from '../for who section/ForWho';
import FounderSection from '../founder section/FounderSection';
import FreeConsultation from '../free consultation section/FreeConsultation';
import LandingPage from '../landing page/LandingPage';
import Navigation from '../navigation/Navigation';
import OnlineMarketing from '../online marketing/OnlineMarketing';
// import '../styles/globals.css'
import { Inter } from 'next/font/google';
import Head from 'next/head';
import { useEffect, useRef, useState } from 'react';

const MainPage = () => {
  const [contactSectioY, setContentSectionY] = useState(0);
  const [contactFormVisible, setContactFormVisible] = useState(false);
  const contactSectionRef = useRef(null);
  useEffect(() => {
    if (contactSectionRef.current) {
      const distanceFromTop = contactSectionRef.current.offsetTop;
      setContentSectionY(distanceFromTop);
    }
  }, []);
  const handleClickingBtn = () => {
    window.scrollTo({ top: contactSectioY, left: 0, behavior: 'smooth' });
    setContactFormVisible(true);
  };
  return (
    <div>
      <Navigation handleClickingBtn={handleClickingBtn} />
      <LandingPage handleClickingBtn={handleClickingBtn} />
      <OnlineMarketing />
      <ContentCards />
      <ConparisonSection />
      <FreeConsultation handleClickingBtn={handleClickingBtn} />
      <ForWho />
      <FounderSection />
      <Consultation handleClickingBtn={handleClickingBtn} />
      <div ref={contactSectionRef}>
        <ContactSection
          contactFormVisible={contactFormVisible}
          setContactFormVisible={setContactFormVisible}
        />
      </div>
      <FooterSection />
    </div>
  );
};
export default MainPage;
