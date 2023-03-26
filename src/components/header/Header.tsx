import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import { LegacyRef } from 'react';
import Divider from '../divider/Divider';
import styles from './Header.module.css';
type Props = {
  handleClickingContactBtn: () => void;
};
const Header = ({ handleClickingContactBtn }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver(null);
  const isVisible = intersectionRatio;

  return (
    <div className='w-full bg-[#1E2D3D] shadow-2xl mt-0'>
      <div className='container'>
        <div
          ref={myRef as LegacyRef<HTMLDivElement>}
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
          ref={myRef as LegacyRef<HTMLDivElement>}
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
          onClick={handleClickingContactBtn}
        >
          Získať ONLINE stratégiu
        </button>
      </div>
    </div>
  );
};
export default Header;
