import { Dispatch, SetStateAction } from 'react';
import Divider from '../divider/Divider';
import styles from './Navigation.module.css';

type Props = {
  isNavClicked: boolean;
  setIsNavClicked: Dispatch<SetStateAction<boolean>>;
  handleClickingContactBtn: () => void;
  handleClickingMarketingBtn: () => void;
  handleClickingAboutUsBtn: () => void;
  handleClickingFreeConsultationBtn: () => void;
};
const NavigationMenuItems = ({
  isNavClicked,
  setIsNavClicked,
  handleClickingContactBtn,
  handleClickingMarketingBtn,
  handleClickingAboutUsBtn,
  handleClickingFreeConsultationBtn,
}: Props) => {
  return (
    <div
      className={
        isNavClicked
          ? `${styles.menuItems} pt-14`
          : `${styles.menuItemsNoactive} pt-14`
      }
    >
      <div className={`${styles.linksList}`}>
        <li className={`${styles.link}`}>
          <a
            href='#'
            className='uppercase'
            onClick={() => {
              handleClickingMarketingBtn();
              setIsNavClicked(false);
            }}
          >
            Online marketing
          </a>
          <div className={`${styles.divider}`}></div>
        </li>
        <li className={`${styles.link}`}>
          <a
            href='#'
            className='uppercase'
            onClick={() => {
              handleClickingAboutUsBtn();
              setIsNavClicked(false);
            }}
          >
            O nás
          </a>
          <div className={`${styles.divider}`}></div>
        </li>
        <li className={`${styles.link}`}>
          <a
            onClick={() => {
              handleClickingFreeConsultationBtn();
              setIsNavClicked(false);
            }}
            href='#'
            className='uppercase'
          >
            bezplatné konzultácie
          </a>
          <div className={`${styles.divider}`}></div>
        </li>
      </div>
      <div className='mx-auto'>
        <Divider color='white' />
        <button
          className='button'
          onClick={() => {
            handleClickingContactBtn();
            setIsNavClicked(false);
          }}
        >
          ZÍSKAŤ ONLINE STRATÉGIU
        </button>
      </div>
    </div>
  );
};
export default NavigationMenuItems;
