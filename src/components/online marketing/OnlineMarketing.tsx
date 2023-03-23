import Image from 'next/image';
import handsPhoto from '../../images/hands.png';
import computerPhoto from '../../images/computer.png';
const OnlineMarketing = () => {
  return (
    <div className='container py-2'>
      <div className='textHeading my-5'>Prečo ONLINE Marketing?</div>
      <div className='textThin my-4'>
        Narovinu - stránka bez klientov je ako postaviť si pobočku v strede
        púšte bez žiadnej cesty smerujúcej k nej.
      </div>
      <Image
        src={handsPhoto}
        alt='Shaking hands'
        className='w-8/12 relative left-1/2 -translate-x-2/4'
      />
      <div className='my-5 textThin text-center flex flex-col'>
        <span className='font-normal'>Tu prichádza ONLINE Marketing.</span>
        <span className='textThin'>
          Marketing je ako “Digitálna cesta”, ktorá vedie vášho vysneného
          klienta ku vám s kreditnou kartou v jeho ruke
        </span>
      </div>
      <Image src={computerPhoto} alt='Shaking hands' className='py-5 w-4/5'mb-3 />
    </div>
  );
};
export default OnlineMarketing;
