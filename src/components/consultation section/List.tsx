import styles from './Consultation.module.css';

const List = () => {
  return (
    <ul>
      <li className={`${styles.listPoint}`}>
        <div className={`${styles.ball}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.topRight}`}></div>
        </div>
        <div className={`${styles.textThin}`}>
          Kancelárie, ktoré chcú previesť svoje súčasné webové stránky na{' '}
          <span className={`${styles.textStrong}`}>
            vysokokvalitný a efektívny{' '}
          </span>
          online marketing.
        </div>
      </li>
      <li className={`${styles.listPoint}`}>
        <div className={`${styles.ball}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.topRight}`}></div>
        </div>
        <div className={`${styles.textThin}`}>
          Kancelárie, ktoré chcú preniesť svoje offline podnikanie do
          <span className={`${styles.textStrong}`}> online sveta.</span>
        </div>
      </li>
      <li className={`${styles.listPoint}`}>
        <div className={`${styles.ball}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.topRight}`}></div>
        </div>
        <div className={`${styles.textThin}`}>
          Kancelárie ktoré chcú porozumieť tomu ako dokážu zlepšiť
          <span className={`${styles.textStrong}`}> ich výsledky </span>v online
          priestore pomocou kampaní.
        </div>
      </li>
      <li className={`${styles.listPoint}`}>
        <div className={`${styles.ball}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.topRight}`}></div>
        </div>
        <div className={`${styles.textThin}`}>
          Kancelárie, ktoré hľadajú príležitosť ako maximalizovať{' '}
          <span className={`${styles.textStrong}`}>
            množstvo a hodnotu dopytov.
          </span>
        </div>
      </li>
      <li className={`${styles.listPoint}`}>
        <div className={`${styles.ball}`}>
          <div className={`${styles.bigBall}`}></div>
          <div className={`${styles.smallBall} ${styles.topRight}`}></div>
        </div>
        <div className={`${styles.textThin}`}>
          Kancelárie, ktoré hľadajú{' '}
          <span className={`${styles.textStrong}`}> spoľahlivú agentúru,</span>
          vďaka ktorej bude ich spoločnosť prioritou.
        </div>
      </li>
    </ul>
  );
};
export default List;
