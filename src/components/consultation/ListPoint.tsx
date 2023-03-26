import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { LegacyRef } from 'react';
import styles from './Consultation.module.css';

type Props = {
  point: { id: number; text: string };
};
const ListPoint = ({ point }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver(null);
  const isVisible = intersectionRatio;

  return (
    <li
      ref={myRef as LegacyRef<HTMLLIElement>}
      className={
        isVisible
          ? `${styles.listPoint} ${styles.pointVisible}`
          : `${styles.listPoint}`
      }
    >
      <div className={`${styles.ball}`}>
        <div className={`${styles.bigBall}`}></div>
        <div className={`${styles.smallBall} ${styles.topRight}`}></div>
      </div>
      <div className={`${styles.textThin}`}>{point.text}</div>
    </li>
  );
};
export default ListPoint;
