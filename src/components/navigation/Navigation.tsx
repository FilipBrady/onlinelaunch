import { useState } from 'react';
import Divider from '../divider/Divider';
import styles from './Navigation.module.css';
type Props = {
  handleClickingBtn: () => void;
};
const Navigation = ({ handleClickingBtn }: Props) => {
  const [isNavClicked, setIsNavClicked] = useState(false);
  return (
    <div
      className={`${styles.navContainer} sticky top-0 left-0 z-50 bg-[#1E2D3D] text-white flex flex-col w-full px-7 py-3`}
    >
      <div className='flex flex-row justify-between z-20 relative'>
        <div>
          <span className='font-bold'>online</span>launch
        </div>
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
      </div>
      <div
        className={
          isNavClicked
            ? `${styles.menuItems} pt-14`
            : `${styles.menuItemsNoactive} pt-14`
        }
      >
        <div className={`${styles.linksList}`}>
          <li className={`${styles.link}`}>
            <a href='#'>Home</a>
            <div className={`${styles.divider}`}></div>
          </li>
          <li className={`${styles.link}`}>
            <a href='#'>about</a>
            <div className={`${styles.divider}`}></div>
          </li>
          <li className={`${styles.link}`}>
            <a href='#'>blogs</a>
            <div className={`${styles.divider}`}></div>
          </li>
        </div>
        <div className='mx-auto'>
          <Divider color='white' />
          <button
            className='button'
            onClick={() => {
              handleClickingBtn();
              setIsNavClicked(false);
            }}
          >
            ZÍSKAŤ ONLINE STRATÉGIU
          </button>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
