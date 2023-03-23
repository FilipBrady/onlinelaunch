import badge from '../../images/badge.svg';
import styles from "./FreeConsultation.module.css"
const FreeConsultation = () => {
  return (
    <div className='container bg-[#1E2D3D]'>
      <div className={`${styles.iconTop}`}>
        <div className={`${styles.badgeIcon}`}></div>
      </div>
      <div className='textThin py-2'>Radi cítite opak smútku?</div>
      <div className='textHeading'>
        Získajte bezplatnú konzultáciu určenú právnické kancelárie
      </div>
      <button className='button'>Získať konzultáciu zadarmo</button>
    </div>
  );
};
export default FreeConsultation;
