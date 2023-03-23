import Divider from '../divider/Divider';

const LandingPage = () => {
  return (
    <div className='container bg-[#1E2D3D] shadow-2xl'>
      <div className='textHeading'>
        <span className='font-normal'>Garantované výsledky</span> <br />
        <span className='font-medium'>ONLINE marketingu pre </span> <br />
        <span className='font-bold'>elitné právnické firmy</span>
      </div>
      <Divider />
      <div className='textThin'>
        Dedikované výsledky web stránok a výkonostných kampaní pre tých
        najlepších v právnickom odvetvií
      </div>
      <div>
        <button className=' bg-pink inline-block px-8 py-4 my-8'>
          Získať ONLINE stratégiu
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
