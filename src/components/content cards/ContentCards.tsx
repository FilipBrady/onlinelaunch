import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useRef, useState } from 'react';
import Card from './Card'
import styles from './ContentCards.module.css';
const ContentCards = () => {
  const [cardsContent, setCardsContrent] = useState([
    {
      id: 1,
      title: 'Efektívne online kampane',
      description:
        'Vytvoríme vám kampane s jediným cieľom. Predať. Oslovíme vašu cieľovú skupinu, ktorá má pre vás najväčšiu hodnotu, tak aby chcela spolupracovať práve s vami.',
    },
    {
      id: 2,
      title: 'Unikátny copywritting a predajné vizuály',
      description:
        'Prezentácia a budovanie značky naprieč všetkými kanálmi je veľmi dôležitou súčasťou celého online marketignu. Zastrešíme vašu prezentáciu ako na webe, tak aj na sociálnych sieťach.',
    },
    {
      id: 3,
      title: 'Moderný dizajn s úlohou získavania klientov',
      description:
        'Hlavnou úlohou webstránky, je urobiť z potencionálnych zákazníkov vašich klientov. Docielíme to pomocou jasnej štruktúry, textov a dizajnu určeného na predaj.',
    },
  ]);


  return (
    <div className='container bg-[#ECEAD7] h-full '>
      {cardsContent.map(cardContent => (
        <Card key={cardContent.id} cardContent={cardContent} />
      ))}
      {/* <div
        ref={myRef}
        className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
      >
        <div className={`${styles.balls}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.topLeft}`}></div>
        </div>
        <div className={`${styles.cardHeading} my-4`}>
          Efektívne online kampane
        </div>
        <div className='textThin mb-4'>
          Vytvoríme vám kampane s jediným cieľom. Predať. Oslovíme vašu cieľovú
          skupinu, ktorá má pre vás najväčšiu hodnotu, tak aby chcela
          spolupracovať práve s vami.
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={`${styles.balls}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.bottomRight}`}></div>
        </div>
        <div className={`${styles.cardHeading} my-4`}>
          Unikátny copywritting a predajné vizuály
        </div>
        <div className='textThin mb-4'>
          Prezentácia a budovanie značky naprieč všetkými kanálmi je veľmi
          dôležitou súčasťou celého online marketignu. Zastrešíme vašu
          prezentáciu ako na webe, tak aj na sociálnych sieťach.
        </div>
      </div>
      <div className={`${styles.card}`}>
        <div className={`${styles.balls}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.bottomLeft}`}></div>
        </div>
        <div className={`${styles.cardHeading} my-4`}>
          Moderný dizajn s úlohou získavania klientov
        </div>
        <div className='textThin mb-4'>
          Hlavnou úlohou webstránky, je urobiť z potencionálnych zákazníkov
          vašich klientov. Docielíme to pomocou jasnej štruktúry, textov a
          dizajnu určeného na predaj.
        </div>
      </div> */}
    </div>
  );
};
export default ContentCards;
