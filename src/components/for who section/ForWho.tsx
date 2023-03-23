import Divider from "../divider/Divider";

const ForWho = () => {
  return (
    <div className='container bg-[#ECEAD7] text-black'>
      <div className='textHeadingBlack'>Pre koho je Online Launch určený?</div>
      <Divider color="black" />
      <div className='grid grid-cols-2 grid-rows-2 pt-2 pb-4'>
        <div className='forWhoCard border-r-[.5px]'>
          <div className='whoCardBalls'>
            <div className='whoCardBigBall'></div>
            <div className='whoCardSmallBall topRight'></div>
          </div>
          <div className='textThinBlack'>Pre začínajúcu právnicku kanceláriu</div>
        </div>
        <div className='forWhoCard'>
          <div className='whoCardBalls'>
            <div className='whoCardBigBall'></div>
            <div className='whoCardSmallBall bottomRight'></div>
          </div>
          <div className='textThinBlack'>Pre právnicku kanceláriu bez výsledkov online</div>
        </div>
        <div className='forWhoCard border-r-[.5px] border-t-[.5px]'>
          <div className='whoCardBalls'>
            <div className='whoCardBigBall'></div>
            <div className='whoCardSmallBall bottomLeft'></div>
          </div>
          <div className='textThinBlack'>Pre právnicke kancelárie bez online stratégie</div>
        </div>
        <div className='forWhoCard border-t-[.5px]'>
          <div className='whoCardBalls'>
            <div className='whoCardBigBall'></div>
            <div className='whoCardSmallBall topLeft'></div>
          </div>
          <div className='textThinBlack'>Pre právnikov, ktorí chcú rásť</div>
        </div>
      </div>
    </div>
  );
};
export default ForWho;
