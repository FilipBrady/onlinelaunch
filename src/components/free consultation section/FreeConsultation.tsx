import badge from '../../images/badge.svg'
const FreeConsultation = () => {
  return (
    <div className='container relative bg-[#1E2D3D] pb-5 pt-2'>
      <div className="iconTop">
        <div className='badgeIcon'></div>
      </div>
      <div className='textThin py-7'>Radi cítite opak smútku?</div>
      <div className='textHeading'>
        Získajte bezplatnú konzultáciu určenú právnické kancelárie
      </div>
      <button className='bg-pink px-8 py-4 my-8'>
        Získať konzultáciu zadarmo
      </button>
    </div>
  );
};
export default FreeConsultation;
