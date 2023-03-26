import Image from 'next/image';
import founder from '../../images/Jozko.png';

const FounderSection = () => {
  return (
    <div className='container'>
      <Image
        src={founder}
        alt='Jozef Mrkvička'
        className='w-full rounded-2xl founderImage'
      />
      <div className='text-xs text-white font-thin mt-3'>Jožko Mrkvička</div>
      <div className='text-xs text-white font-thin mt-1'>CEO & Founder</div>
    </div>
  );
};
export default FounderSection;
