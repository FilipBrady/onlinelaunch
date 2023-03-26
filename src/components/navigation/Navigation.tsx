import { useState } from 'react';
import styles from './Navigation.module.css';
import NavigationBurger from './NavigationBurger';
import NavigationMenuItems from './NavigationMenuItems';
type Props = {
  handleClickingContactBtn: () => void;
  handleClickingMarketingBtn: () => void;
  handleClickingAboutUsBtn: () => void;
  handleClickingFreeConsultationBtn: () => void;
};
const Navigation = ({
  handleClickingContactBtn,
  handleClickingMarketingBtn,
  handleClickingAboutUsBtn,
  handleClickingFreeConsultationBtn,
}: Props) => {
  const [isNavClicked, setIsNavClicked] = useState(false);
  return (
    <div
      className={`${styles.navContainer} sticky top-0 left-0 z-50 bg-[#1E2D3D] text-white flex flex-col w-full px-7 py-3`}
    >
      <div className='flex flex-row justify-between z-20 relative'>
        <div>
          <span className='font-bold'>online</span>launch
        </div>
        <NavigationBurger
          isNavClicked={isNavClicked}
          setIsNavClicked={setIsNavClicked}
        />
      </div>
      <NavigationMenuItems
        isNavClicked={isNavClicked}
        setIsNavClicked={setIsNavClicked}
        handleClickingContactBtn={handleClickingContactBtn}
        handleClickingMarketingBtn={handleClickingMarketingBtn}
        handleClickingAboutUsBtn={handleClickingAboutUsBtn}
        handleClickingFreeConsultationBtn={handleClickingFreeConsultationBtn}
      />
    </div>
  );
};
export default Navigation;
