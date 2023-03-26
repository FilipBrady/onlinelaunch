import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { LegacyRef } from 'react';
import styles from './Comparison.module.css';
type Props = {
  card: {
    id: number;
    title: string;
    points: { id: number; text: string }[];
    variant: string;
  };
};
const ComparisonCard = ({ card }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver({});
  const isVisible = intersectionRatio;
  return (
    <div
      ref={myRef as LegacyRef<HTMLDivElement>}
      className={`${styles.card} ${
        isVisible ? `${styles.cardVisible} ${styles[card.variant]}` : ''
      } my-3`}
    >
      <div className={`${styles.topCorner}`}></div>
      <div className='text-white'>{card.title}</div>
      <ul
        className={
          card.variant === 'good'
            ? `${styles.list} ${styles.good}`
            : `${styles.list} ${styles.wrong}`
        }
      >
        {card.points.map((point: any) => (
          <li key={point.id} className={`${styles.point}`}>
            <div>{point.text}</div>
          </li>
        ))}
      </ul>
      <div className={`${styles.bottomCorner}`}></div>
    </div>
  );
};
export default ComparisonCard;
