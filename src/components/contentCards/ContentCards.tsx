import { useState } from 'react';
import Card from './Card';
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
    <div className='w-full bg-[#ECEAD7] h-full '>
      <div className='container'>
        {cardsContent.map(cardContent => (
          <Card key={cardContent.id} cardContent={cardContent} />
        ))}
      </div>
    </div>
  );
};
export default ContentCards;
