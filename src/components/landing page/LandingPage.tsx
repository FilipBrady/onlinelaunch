import Divider from "../divider/Divider";

const LandingPage = () => {
  return (
    <div className="w-11/12 mx-auto flex flex-col justify-between items-center">
      <div className='text-2xl text-center mx-auto'>
        <span className='font-normal'>Garantované výsledky</span> <br />
        <span className='font-medium'>ONLINE marketingu pre </span> <br />
        <span className='font-bold'>elitné právnické firmy</span>
      </div>
      <div className='text-base text-center mx-auto mt-10'>
        Dedikované výsledky web stránok a výkonostných kampaní pre tých
        najlepších v právnickom odvetvií
      </div>
      <div>
        <button className=" bg-pink px-8 py-4 mt-10">Získať ONLINE stratégiu</button>
      </div>
      <Divider />
    </div>
  );
};
export default LandingPage;
