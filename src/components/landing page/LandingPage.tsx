import Divider from '../divider/Divider';
type Props = {
  handleClickingBtn: () => void;
}
const LandingPage = ({ handleClickingBtn }: Props) => {
  
  return (
    <div className='container bg-[#1E2D3D] shadow-2xl mt-0'>
      <div className='textHeading'>
        <span className='font-normal'>Garantované výsledky</span> <br />
        <span className='font-medium'>ONLINE marketingu pre </span> <br />
        <span className='font-bold'>elitné právnické firmy</span>
      </div>
      <Divider color='white' />
      <div className='textThin'>
        Dedikované výsledky web stránok a výkonostných kampaní pre tých
        najlepších v právnickom odvetvií
      </div>
      <div>
        <button className='button' onClick={handleClickingBtn}>
          Získať ONLINE stratégiu
        </button>
      </div>
    </div>
  );
};
export default LandingPage;
