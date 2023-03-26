import { useState } from 'react';
import Divider from '../divider/Divider';
import styles from './Comparison.module.css';
import ComparisonCard from './ComparisonCard';

const ConparisonSection = () => {
  const [cardContent, setCardContent] = useState([
    {
      id: 1,
      title: 'Bez kampaní',
      points: [
        { id: 1, text: 'Nestabilny tok klientov' },
        { id: 2, text: 'Chaotické získavanie klientov' },
        { id: 3, text: 'Slabé povedomie o značke' },
        { id: 4, text: 'Smútok' },
      ],
      variant: 'wrong',
    },
    {
      id: 2,
      title: 'S kampaňami',
      points: [
        { id: 1, text: 'Stabilný tok klientov' },
        { id: 2, text: 'Prehladné získavanie klientov' },
        { id: 3, text: 'Silné povedomie o značke' },
        { id: 4, text: 'Opak smútku' },
      ],
      variant: 'good',
    },
  ]);
  return (
    <div className='w-full'>
      <div className='container'>
        <div className='textHeading'>
          Online kampane ako kľúč k vášmu{' '}
          <span className='relative pinkTextDecoration'> online úspechu</span>
        </div>
        <Divider color='white' />
        <div className='textThin'>
          Je to rozdiel medzi 1,929,999,999 stránkami ktoré nezarábajú peniaze a
          0.000000002%, ktoré zarabajú
        </div>
        {cardContent.map(card => (
          <ComparisonCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
};
export default ConparisonSection;
