import styles from './FreeConsultation.module.css';
type Props = {
  handleClickingContactBtn: () => void;
};
const FreeConsultation = ({ handleClickingContactBtn }: Props) => {
  return (
    <div className='w-full bg-[#1E2D3D]'>
      <div className='container'>
        <div className={`${styles.iconTop}`}>
          <div className={`${styles.badgeIcon}`}></div>
        </div>
        <div className='textThin py-2'>Radi cítite opak smútku?</div>
        <div className='textHeading'>
          Získajte
          <span className='relative pinkTextDecoration'>
            {' '}
            bezplatnú konzultáciu{' '}
          </span>
          určenú právnické kancelárie
        </div>
        <button className='button' onClick={handleClickingContactBtn}>
          Získať konzultáciu zadarmo
        </button>
      </div>
    </div>
  );
};
export default FreeConsultation;
