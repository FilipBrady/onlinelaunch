import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './Consultation.module.css';

type Props = {
  point: { id: number; text: string };
};
const ListPoint = ({ point }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver({});
  const isVisible = intersectionRatio;

  return (
    <li
      ref={myRef}
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
