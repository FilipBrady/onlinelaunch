// import ConparisonSection from '../comparison/ConparisonSection';
// import Consultation from '../consultation/Consultation';
// import ContactSection from '../contact/ContactSection';
// import ContentCards from '../contentCards/ContentCards';
// import FooterSection from '../footer/FooterSection';
// import ForWho from '../forWho/ForWho';
// import FounderSection from '../founder/FounderSection';
// import FreeConsultation from '../freeConsultation/FreeConsultation';
// import Header from '../header/Header';
// import Navigation from '../navigation/Navigation';
// import OnlineMarketing from '../onlineMarketing/OnlineMarketing';
// import { useEffect, useRef, useState } from 'react';

// const MainPage = () => {
//   const [contactSectioY, setContentSectionY] = useState(0);

//   const [onlineMarketingSectioY, setOnlineMarketingSectioY] = useState(0);
//   const onlineMarketingRef = useRef<HTMLDivElement>(null);

//   const [aboutUsSectioY, setAboutUsSectioY] = useState(0);
//   const aboutUsRef = useRef<HTMLDivElement>(null);

//   const [freeConsultationSectioY, setFreeConsultationSectioY] = useState(0);
//   const freeConsultationRef = useRef<HTMLDivElement>(null);

//   const contactSectionRef = useRef<HTMLDivElement>(null);
//   useEffect(() => {
//     if (contactSectionRef.current) {
//       const distanceFromTop = contactSectionRef.current.offsetTop;
//       setContentSectionY(distanceFromTop);
//     }
//     if (onlineMarketingRef.current) {
//       const distanceFromTop = onlineMarketingRef.current.offsetTop;
//       setOnlineMarketingSectioY(distanceFromTop);
//     }
//     if (aboutUsRef.current) {
//       const distanceFromTop = aboutUsRef.current.offsetTop;
//       setAboutUsSectioY(distanceFromTop);
//     }
//     if (freeConsultationRef.current) {
//       const distanceFromTop = freeConsultationRef.current.offsetTop;
//       setFreeConsultationSectioY(distanceFromTop);
//     }
//   }, []);
//   const handleClickingContactBtn = () => {
//     window.scrollTo({ top: contactSectioY, left: 0, behavior: 'smooth' });
//   };
//   const handleClickingMarketingBtn = () => {
//     window.scrollTo({
//       top: onlineMarketingSectioY,
//       left: 0,
//       behavior: 'smooth',
//     });
//   };
//   const handleClickingAboutUsBtn = () => {
//     window.scrollTo({
//       top: aboutUsSectioY,
//       left: 0,
//       behavior: 'smooth',
//     });
//   };
//   const handleClickingFreeConsultationBtn = () => {
//     window.scrollTo({
//       top: freeConsultationSectioY,
//       left: 0,
//       behavior: 'smooth',
//     });
//   };
//   return (
//     <div>
//       <Navigation
//         handleClickingContactBtn={handleClickingContactBtn}
//         handleClickingMarketingBtn={handleClickingMarketingBtn}
//         handleClickingAboutUsBtn={handleClickingAboutUsBtn}
//         handleClickingFreeConsultationBtn={handleClickingFreeConsultationBtn}
//       />
//       <Header handleClickingContactBtn={handleClickingContactBtn} />
//       <div ref={onlineMarketingRef}>
//         <OnlineMarketing />
//       </div>
//       <ContentCards />
//       <ConparisonSection />
//       <div ref={freeConsultationRef}>
//         <FreeConsultation handleClickingContactBtn={handleClickingContactBtn} />
//       </div>
//       <div ref={aboutUsRef}>
//         <ForWho />
//       </div>
//       <FounderSection />
//       <Consultation handleClickingContactBtn={handleClickingContactBtn} />
//       <div ref={contactSectionRef}>
//         <ContactSection />
//       </div>
//       <FooterSection />
//     </div>
//   );
// };
// export default MainPage;
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
