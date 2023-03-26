import { Dispatch, SetStateAction, useState } from 'react';
import Divider from '../divider/Divider';
import ContactForm from './ContactForm';
import styles from './ContactForm.module.css';

const ContactSection = () => {
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
        <div
          className='textHeading mt-8 mb-4'
          // onClick={() => setContactFormVisible(!contactFormVisible)}
        >
          Už sa tešíme na Vašu správu
        </div>
      </div>
      <div className={`${styles.activeDiv} w-full`}>
        <ContactForm />
      </div>
    </div>
  );
};
export default ContactSection;
