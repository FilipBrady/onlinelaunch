import Divider from '../divider/Divider';

const ContactSection = () => {
  const handleEv = (ev: any) => {
    console.log(ev.pageY);
  };
  return (
    <div className='container' onClick={ev => handleEv(ev)}>
      <div className='textThin mb-7'>Máte ďalšie otázky?</div>
      <div className='textHeading'>
        <span className='font-normal'>Napíšte nám ešte dnes!</span> <br />
      </div>
      <Divider color='white' />
      <div className='textThin mt-2'>
        Naši odborníci na digitálny marketing vytvorili množstvo úspešných
        digitálnych marketingových kampaní pre firmy, ktoré chcú zvýšiť počet
        potenciálnych zákazníkov a kvalitnú návštevnosť webových stránok.
      </div>
      <div>
        <button className='button'>Opýtajte sa ešte dnes</button>
      </div>
    </div>
  );
};
export default ContactSection;
