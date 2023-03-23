import Divider from '../divider/Divider';
import styles from './Comparison.module.css';

const ConparisonSection = () => {
  return (
    <div className='container'>
      <div className="textHeading">
        Online kampane ako kľúč k vášmu online úspechu
      </div>
      <Divider color='white' />
      <div className='textThin'>
        Je to rozdiel medzi 1,929,999,999 stránkami ktoré nezarábajú peniaze a
        0.000000002%, ktoré zarabajú
      </div>
      <div className={`${styles.card} my-3`}>
        <div className='text-white'>Bez kampaní</div>
        <ul className={`${styles.list} ${styles.wrong}`}>
          <li className={`${styles.point}`}>
            <div>Nestabilny tok klientov</div>
          </li>
          <li className={`${styles.point}`}>
            <div>Chaotické získavanie klientov</div>
          </li>
          <li className={`${styles.point}`}>
            <div>Slabé povedomie o značke</div>
          </li>
          <li className={`${styles.point}`}>
            <div>Smútok</div>
          </li>
        </ul>
      </div>
      <div className={`${styles.card} mb-7`}>
        <div className='text-white'>S kampaňami</div>
        <ul className={`${styles.list} ${styles.good}`}>
          <li className={`${styles.point}`}>
            <div>Stabilný tok klientov</div>
          </li>
          <li className={`${styles.point}`}>
            <div>Prehladné získavanie klientov</div>
          </li>
          <li className={`${styles.point}`}>
            <div>Silné povedomie </div>
          </li>
          <li className={`${styles.point}`}>
            <div>Opak smútku</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ConparisonSection;
