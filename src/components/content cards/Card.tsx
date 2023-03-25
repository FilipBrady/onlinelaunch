import styles from './ContentCards.module.css';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { useRef, useState } from 'react';

type Props = {
  cardContent: { id: number; title: string; description: string };
};
const Card = ({ cardContent }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver({});
  const isVisible = intersectionRatio > 0;

  return (
    <div
      ref={myRef}
      id={`${cardContent.id}`}
      className={`${styles.card} ${isVisible ? styles.cardVisible : ''}`}
    >
      <div className={`${styles.balls}`}>
        <div className={`${styles.bigBall}`}></div>
        <div className={`${styles.smallBall} ${styles.topLeft}`}></div>
      </div>
      <div className={`${styles.cardHeading} my-4`}>{cardContent.title}</div>
      <div className='textThin mb-4'>{cardContent.description}</div>
    </div>
  );
};
export default Card;
