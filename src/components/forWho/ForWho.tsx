import { useState } from 'react';
import Divider from '../divider/Divider';
import ForWhoCard from './ForWhoCard';

const ForWho = () => {
  const [cardContent, setCardContent] = useState([
    {
      id: 1,
      text: 'Pre začínajúcu právnicku kanceláriu',
      ballPosition: 'topRight',
    },
    {
      id: 2,
      text: 'Pre právnicku kanceláriu bez výsledkov online',
      ballPosition: 'bottomRight',
    },
    {
      id: 3,
      text: 'Pre právnicke kancelárie bez online stratégie',
      ballPosition: 'topLeft',
    },
    {
      id: 4,
      text: 'Pre právnikov, ktorí chcú rásť',
      ballPosition: 'bottomLeft',
    },
  ]);

  return (
    <div className='w-full bg-[#ECEAD7] text-black'>
      <div className='container'>
        <div className='textHeadingBlack'>
          Pre koho je{' '}
          <span className='relative z-10 pinkTextDecoration font-bold'>
            {' '}
            Online Launch{' '}
          </span>{' '}
          určený?
        </div>
        <Divider color='black' />
        <div className='grid grid-cols-2 grid-rows-2 pt-2 pb-4'>
          {cardContent.map(card => (
            <ForWhoCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default ForWho;
