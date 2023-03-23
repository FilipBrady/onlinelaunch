import Divider from '../divider/Divider';

const ContactSection = () => {
  return (
    <div
      className='w-11/12 mx-auto flex flex-col justify-between items-center bg-[#1E2D3D];
    box-shadow-[0_17px_18px_rgba(0, 0, 0, 0.25)]'
    >
      <div className='text-sm mb-10 font-light text-center'>Máte ďalšie otázky?</div>
      <div className='text-2xl text-center'>
        <span className='font-normal'>Napíšte nám ešte dnes!</span> <br />
      </div>
      <Divider />
      <div className='text-sm font-extralight text-center mt-10'>
        Naši odborníci na digitálny marketing vytvorili množstvo úspešných
        digitálnych marketingových kampaní pre firmy, ktoré chcú zvýšiť počet
        potenciálnych zákazníkov a kvalitnú návštevnosť webových stránok.
      </div>
      <div>
        <button className=' bg-pink px-8 py-4 mt-10'>
          Opýtajte sa ešte dnes
        </button>
      </div>
    </div>
  );
};
export default ContactSection;
