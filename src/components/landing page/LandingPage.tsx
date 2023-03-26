import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import Divider from '../divider/Divider';
import styles from './LoadingPage.module.css';
type Props = {
  handleClickingBtn: () => void;
};
const LandingPage = ({ handleClickingBtn }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver({});
  const isVisible = intersectionRatio;

  return (
    <div className='w-full bg-[#1E2D3D] shadow-2xl mt-0'>
      <div className='container'>
        <div
          ref={myRef}
          className={
            isVisible ? `${styles.textVisible}  textHeading` : 'textHeading'
          }
        >
          <div className='font-normal pinkTextDecoration'>
            Garantované výsledky
          </div>{' '}
          <div className='font-medium'>ONLINE marketingu pre </div>
          <div className='font-bold'>elitné právnické firmy</div>
        </div>
        <Divider color='white' />
        <div
          ref={myRef}
          className={
            isVisible
              ? `${styles.textVisible} ${styles.visibleDelay}  textThin`
              : 'textThin'
          }
        >
          Dedikované výsledky web stránok a výkonostných kampaní pre tých
          najlepších v právnickom odvetvií
        </div>

        <button
          className={isVisible ? `${styles.buttonVisible} button` : `button`}
          onClick={handleClickingBtn}
        >
          Získať ONLINE stratégiu
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
