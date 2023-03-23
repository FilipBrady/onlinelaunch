import badge from '../../images/badge.svg';
import styles from './Divider.module.css';
type dividerProps = {
  color: 'white' | 'black';
};
const Divider = ({ color }: dividerProps) => {
  return (
    <div
      className={`${color === 'white' ? styles.divider : styles.dividerBlack}`}
    >
      <svg
        width='24'
        height='28'
        viewBox='0 0 14 18'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className={`${styles.dividerIcon}`}
      >
        <path
          d='M13.9917 15.1417L10.65 14.0001L9.5 17.3334L6.93333 12.3334L4.5 17.3334L3.35 14.0001L0.0083313 15.1417L2.44166 10.1417C1.61412 9.10861 1.16428 7.82379 1.16666 6.50008C1.16666 4.95298 1.78125 3.46925 2.87521 2.37529C3.96917 1.28133 5.4529 0.666748 7 0.666748C8.54709 0.666748 10.0308 1.28133 11.1248 2.37529C12.2188 3.46925 12.8333 4.95298 12.8333 6.50008C12.8333 7.87508 12.3583 9.14175 11.5583 10.1417L13.9917 15.1417ZM2.83333 6.50008L5.075 7.61675L4.91667 10.1167L7 8.73341L9.08333 10.1084L8.94167 7.61675L11.1667 6.50008L8.93333 5.37508L9.08333 2.89175L7 4.25841L4.91667 2.87508L5.05833 5.38341L2.83333 6.50008Z'
          fill={color === 'white' ? 'white' : 'black'}
        />
      </svg>
    </div>
  );
};
export default Divider;
