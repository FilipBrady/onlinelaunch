import Divider from '../divider/Divider';
type Props = {
  handleClickingBtn: () => void;
};
const LandingPage = ({ handleClickingBtn }: Props) => {
  return (
    <div className='container bg-[#1E2D3D] shadow-2xl mt-0'>
      <div className='textHeading'>
        <div className='font-normal pinkTextDecoration'>
          Garantované výsledky
        </div>{' '}
        <div className='font-medium'>ONLINE marketingu pre </div>
        <div className='font-bold'>elitné právnické firmy</div>
      </div>
      <Divider color='white' />
      <div className='textThin'>
        Dedikované výsledky web stránok a výkonostných kampaní pre tých
        najlepších v právnickom odvetvií
      </div>

      <button className='button' onClick={handleClickingBtn}>
        Získať ONLINE stratégiu
      </button>
    </div>
  );
};
export default LandingPage;
