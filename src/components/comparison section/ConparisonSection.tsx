import Divider from '../divider/Divider';

const ConparisonSection = () => {
  return (
    <div className='container py-2 mt-3'>
      <div className='textHeading'>
        Online kampane ako kľúč k vášmu online úspechu
      </div>
      <Divider bgColor='#19263' />
      <div className='textThin'>
        Je to rozdiel medzi 1,929,999,999 stránkami ktoré nezarábajú peniaze a
        0.000000002%, ktoré zarabajú
      </div>
      <div className='comparisonCard my-5'>
        <div>Bez kampaní</div>
        <ul className='comparisonListWrong'>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Nestabilny tok klientov</div>
          </li>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Chaotické získavanie klientov</div>
          </li>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Slabé povedomie o značke</div>
          </li>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Smútok</div>
          </li>
        </ul>
      </div>
      <div className='comparisonCard mb-7'>
        <div>S kampaňami</div>
        <ul className='comparisonListGood'>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Stabilný tok klientov</div>
          </li>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Prehladné získavanie klientov</div>
          </li>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Silné povedomie  </div>
          </li>
          <li className='comparisonPoint'>
            <div className='compatisonTextThin'>Opak smútku</div>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ConparisonSection;
