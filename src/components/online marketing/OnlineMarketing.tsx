import Image from 'next/image';
import handsPhoto from '../../images/hands.png';
import computerPhoto from '../../images/computer.png';
import useIntersectionObserver from '@/hooks/useIntersectionObserver';
const OnlineMarketing = () => {
  const [myFirstRef, firstIntersectionRatio] = useIntersectionObserver({});
  const isFirstVisible = firstIntersectionRatio;
  const [mySeconfRef, secondIntersectionRatio] = useIntersectionObserver({});
  const isSecondVisible = secondIntersectionRatio;

  return (
    <div className='container'>
      <div ref={myFirstRef} className={isFirstVisible ? 'visibleRight' : ''}>
        <div className='textHeading my-5'>
          Prečo{' '}
          <span className='relative pinkTextDecoration'>ONLINE Marketing?</span>
        </div>
        <div className='textThin my-4'>
          Narovinu - stránka bez klientov je ako postaviť si pobočku v strede
          púšte bez žiadnej cesty smerujúcej k nej.
        </div>
        <Image
          src={handsPhoto}
          alt='Shaking hands'
          className='w-8/12 translate-x-2/4'
        />
      </div>
      <div ref={mySeconfRef} className={isSecondVisible ? "visibleLeft" : ""}>
        <div className='my-5 textThin flex flex-col'>
          <span className='font-normal'>Tu prichádza ONLINE Marketing.</span>
          <span className='textThin'>
            Marketing je ako “Digitálna cesta”, ktorá vedie vášho vysneného
            klienta ku vám s kreditnou kartou v jeho ruke
          </span>
        </div>
        <Image
          src={computerPhoto}
          alt='Shaking hands'
          className='py-5 w-4/5 mx-auto'
          mb-3
        />
      </div>
    </div>
  );
};
export default OnlineMarketing;
