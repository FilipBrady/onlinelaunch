import { Dispatch, SetStateAction } from 'react';
import styles from './Navigation.module.css';
type Props = {
  isNavClicked: boolean;
  setIsNavClicked: Dispatch<SetStateAction<boolean>>;
};
const NavigationBurger = ({ setIsNavClicked, isNavClicked }: Props) => {
  return (
    <div
      className={`${styles.burgerNavigation}`}
      onClick={() => setIsNavClicked(!isNavClicked)}
    >
      <div
        className={
          isNavClicked
            ? `${styles.lineActive} ${styles.line1}`
            : `${styles.line} ${styles.line1}`
        }
      ></div>
      <div
        className={
          isNavClicked
            ? `${styles.lineActive} ${styles.line2}`
            : `${styles.line} ${styles.line2}`
        }
      ></div>
      <div
        className={
          isNavClicked
            ? `${styles.lineActive} ${styles.line3}`
            : `${styles.line} ${styles.line3}`
        }
      ></div>
    </div>
  );
};
export default NavigationBurger;
