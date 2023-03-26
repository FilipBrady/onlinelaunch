import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { LegacyRef } from 'react';
import styles from './ForWho.module.css';
type Props = {
  card: { id: number; text: string; ballPosition: string };
};
const ForWhoCard = ({ card }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver(null);
  const isVisible = intersectionRatio;

  let position = card.ballPosition;
  return (
    <div className={`${styles.card} ${styles[position]}`}>
      <div className={`${styles.ball}`}>
        <div className={`${styles.bigBall}`}></div>
        <div className={`${styles.smallBall} ${styles[position]}`}></div>
      </div>
      <div
        ref={myRef as LegacyRef<HTMLDivElement>}
        className={
          isVisible ? `${styles.cardVisible} textThinBlack ` : ' textThinBlack'
        }
      >
        {card.text}
      </div>
    </div>
  );
};
export default ForWhoCard;
