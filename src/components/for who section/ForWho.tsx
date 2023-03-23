import Divider from '../divider/Divider';
import styles from './ForWho.module.css';

const ForWho = () => {
  return (
    <div className='container bg-[#ECEAD7] text-black'>
      <div className='textHeadingBlack'>Pre koho je Online Launch určený?</div>
      <Divider color='black' />
      <div className='grid grid-cols-2 grid-rows-2 pt-2 pb-4'>
        <div className={`${styles.card} border-r-[.5px]`}>
          <div className={`${styles.ball}`}>
            <div className={`${styles.bigBall}`}></div>
            <div className={`${styles.smallBall} ${styles.topRight}`}></div>
          </div>
          <div className='textThinBlack'>
            Pre začínajúcu právnicku kanceláriu
          </div>
        </div>
        <div className={`${styles.card}`}>
          <div className={`${styles.ball}`}>
            <div className={`${styles.bigBall}`}></div>
            <div className={`${styles.smallBall} ${styles.bottomRight}`}></div>
          </div>
          <div className='textThinBlack'>
            Pre právnicku kanceláriu bez výsledkov online
          </div>
        </div>
        <div className={`${styles.card} border-r-[.5px] border-t-[.5px]`}>
          <div className={`${styles.ball}`}>
            <div className={`${styles.bigBall}`}></div>
            <div className={`${styles.smallBall} ${styles.bottomLeft}`}></div>
          </div>
          <div className='textThinBlack'>
            Pre právnicke kancelárie bez online stratégie
          </div>
        </div>
        <div className={`${styles.card} border-t-[.5px]`}>
          <div className={`${styles.ball}`}>
            <div className={`${styles.bigBall}`}></div>
            <div className={`${styles.smallBall} ${styles.topLeft}`}></div>
          </div>
          <div className='textThinBlack'>Pre právnikov, ktorí chcú rásť</div>
        </div>
      </div>
    </div>
  );
};
export default ForWho;
