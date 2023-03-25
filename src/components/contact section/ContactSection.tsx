import { Dispatch, SetStateAction, useState } from 'react';
import Divider from '../divider/Divider';
import ContactForm from './ContactForm';
import styles from './ContactForm.module.css';

type Props = {
  contactFormVisible: boolean;
  setContactFormVisible: Dispatch<SetStateAction<boolean>>;
};
const ContactSection = ({
  contactFormVisible,
  setContactFormVisible,
}: Props) => {
  return (
    <div className='container'>
      <div className='relative z-20 bg-[#192633]'>
        <div className='textThin mb-7'>Máte ďalšie otázky?</div>
        <div className='textHeading'>
          <span className='font-normal'>
            <span className='relative pinkTextDecoration'> Napíšte nám</span>{' '}
            ešte dnes!
          </span>{' '}
        </div>
        <Divider color='white' />
        <div className='textThin mt-2'>
          Naši odborníci na digitálny marketing vytvorili množstvo úspešných
          digitálnych marketingových kampaní pre firmy, ktoré chcú zvýšiť počet
          potenciálnych zákazníkov a kvalitnú návštevnosť webových stránok.
        </div>
        <button
          className='button'
          onClick={() => setContactFormVisible(!contactFormVisible)}
        >
          Opýtajte sa ešte dnes
        </button>
      </div>
      <div
        className={
          contactFormVisible
            ? `${styles.activeDiv} w-full`
            : `${styles.unactiveDiv} w-full`
        }
      >
        <ContactForm contactFormVisible={contactFormVisible} />
      </div>
    </div>
  );
};
export default ContactSection;
