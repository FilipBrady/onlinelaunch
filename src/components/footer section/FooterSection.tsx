import Divider from '../divider/Divider';

const FooterSection = () => {
  return (
    <div className='container bg-[#1E2D3D]'>
      <Divider color='white' />
      <div className='text-white text-2xl font-light'>
        <span className='font-bold'>online</span>launch
      </div>
      <div className='flex flex-row justify-between gap-7'>
        <div className='text-white'>Kontakt</div>
        <div className='text-white'>GDPR</div>
      </div>
      <Divider color='white' />
      <div className='text-white font-thin text-sm'>©2023 onlinelaunch</div>
      <div className='w-7/12 my-2 text-white'>
        <ul className='flex flex-row justify-between list-none'>
          <li className="socialIcons">@</li>
          <li className="socialIcons">@</li>
          <li className="socialIcons">@</li>
          <li className="socialIcons">@</li>
          <li className="socialIcons">@</li>
        </ul>
      </div>
    </div>
  );
};
export default FooterSection;
