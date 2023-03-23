import styles from './Consultation.module.css';
import List from './List';
const Consultation = () => {
  return (
    <div className={`${styles.container} bg-[#1E2D3D]`}>
      <div className={`${styles.heading} my-3`}>
        Získajte konzultáciu pre vás,
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
      <div className={`${styles.smallHeading} my-3`}>
        Táto konzultácia je dokonalá pre:
      </div>

      <List />

      <button className='bg-pink px-8 py-4 my-8 text-white'>
        Získať konzultáciu zadarmo
      </button>
    </div>
  );
};
export default Consultation;
