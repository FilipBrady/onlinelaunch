import ConparisonSection from '../comparison/ConparisonSection';
import Consultation from '../consultation/Consultation';
import ContactSection from '../contact/ContactSection';
import ContentCards from '../contentCards/ContentCards';
import FooterSection from '../footer/FooterSection';
import ForWho from '../forWho/ForWho';
import FounderSection from '../founder/FounderSection';
import FreeConsultation from '../freeConsultation/FreeConsultation';
import Header from '../header/Header';
import Navigation from '../navigation/Navigation';
import OnlineMarketing from '../onlineMarketing/OnlineMarketing';
import { useEffect, useRef, useState } from 'react';

const MainPage = () => {
  const [sectionYValues, setSectionYValues] = useState<{
    [key: string]: number;
  }>({});
  const handleClickingContactBtn = () => {
    handleClick('contact');
  };

  const handleClickingMarketingBtn = () => {
    handleClick('onlineMarketing');
  };

  const handleClickingAboutUsBtn = () => {
    handleClick('aboutUs');
  };

  const handleClickingFreeConsultationBtn = () => {
    handleClick('freeConsultation');
  };
  const sectionRefs = [
    {
      ref: useRef<HTMLDivElement>(null),
      name: 'contact',
      handleClick: handleClickingContactBtn,
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: 'onlineMarketing',
      handleClick: handleClickingMarketingBtn,
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: 'aboutUs',
      handleClick: handleClickingAboutUsBtn,
    },
    {
      ref: useRef<HTMLDivElement>(null),
      name: 'freeConsultation',
      handleClick: handleClickingFreeConsultationBtn,
    },
  ];

  useEffect(() => {
    sectionRefs.forEach(sectionRef => {
      if (sectionRef.ref.current) {
        const distanceFromTop = sectionRef.ref.current.offsetTop;
        setSectionYValues(prevState => ({
          ...prevState,
          [sectionRef.name]: distanceFromTop,
        }));
      }
    });
  }, []);

  const handleClick = (sectionName: string) => {
    window.scrollTo({
      top: sectionYValues[sectionName],
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div>
      <Navigation
        handleClickingContactBtn={() => handleClick('contact')}
        handleClickingMarketingBtn={() => handleClick('onlineMarketing')}
        handleClickingAboutUsBtn={() => handleClick('aboutUs')}
        handleClickingFreeConsultationBtn={() =>
          handleClick('freeConsultation')
        }
      />
      <Header handleClickingContactBtn={() => handleClick('contact')} />
      <div ref={sectionRefs[1].ref}>
        <OnlineMarketing />
      </div>
      <ContentCards />
      <ConparisonSection />
      <div ref={sectionRefs[3].ref}>
        <FreeConsultation
          handleClickingContactBtn={() => handleClick('contact')}
        />
      </div>
      <div ref={sectionRefs[2].ref}>
        <ForWho />
      </div>
      <FounderSection />
      <Consultation handleClickingContactBtn={() => handleClick('contact')} />
      <div ref={sectionRefs[0].ref}>
        <ContactSection />
      </div>
      <FooterSection />
    </div>
  );
};

export default MainPage;
