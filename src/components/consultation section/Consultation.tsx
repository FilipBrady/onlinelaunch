import useIntersectionObserver from '@/hooks/useIntersectionObserver';
import styles from './Consultation.module.css';
import List from './List';
type Props = {
  handleClickingBtn: () => void;
};
const Consultation = ({ handleClickingBtn }: Props) => {
  const [myRef, intersectionRatio] = useIntersectionObserver({});
  const isVisible = intersectionRatio;

  return (
    <div className={`${styles.container} bg-[#1E2D3D]`}>
      <div className={`${styles.heading} my-3`}>
        Získajte{' '}
        <span className='relative z-10 pinkTextDecoration'> konzultáciu </span>
        pre vás,
      </div>
      <div className={`${styles.textThin} mt-3`}>
        vďaka ktorej zistíte potenciál online sveta.
      </div>
      <div className={`${styles.textThin} mt-3`}>
        Vďaka tejto{' '}
        <span className={`${styles.textStrong}`}>bezplatnej konzultácií </span>
        budete jasne rozumieť ďalším krokom, ktoré môžete podniknúť, aby vaša
        kancelária začala generovať konzistentné a spoľahlivé výsledky s online
        kampanami
      </div>
      <div ref={myRef} className={`${styles.smallHeading} my-3`}>
        Táto konzultácia je dokonalá pre:
      </div>

      <List />

      <button
        ref={myRef}
        className={isVisible ? 'button buttonVisible' : 'button'}
        onClick={handleClickingBtn}
      >
        Získať konzultáciu zadarmo
      </button>
    </div>
  );
};
export default Consultation;
