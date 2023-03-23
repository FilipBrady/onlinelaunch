const ContentCards = () => {
  return (
    <div className='container bg-[#ECEAD7] h-full py-5'>
      <div className='card'>
        <div className='balls'>
          <div className='bigBall'></div>
          <div className='smallBall topLeft'></div>
        </div>
        <div className='cardHeading my-4'>Efektívne online kampane</div>
        <div className='textThin mb-4'>
          Vytvoríme vám kampane s jediným cieľom. Predať. Oslovíme vašu cieľovú
          skupinu, ktorá má pre vás najväčšiu hodnotu, tak aby chcela
          spolupracovať práve s vami.
        </div>
      </div>
      <div className='card'>
        <div className='balls'>
          <div className='bigBall'></div>
          <div className='smallBall bottomRight'></div>
        </div>
        <div className='cardHeading my-4'>
          Unikátny copywritting a predajné vizuály
        </div>
        <div className='textThin mb-4'>
          Prezentácia a budovanie značky naprieč všetkými kanálmi je veľmi
          dôležitou súčasťou celého online marketignu. Zastrešíme vašu
          prezentáciu ako na webe, tak aj na sociálnych sieťach.
        </div>
      </div>
      <div className='card'>
        <div className='balls'>
          <div className='bigBall'></div>
          <div className='smallBall bottomLeft'></div>
        </div>
        <div className='cardHeading my-4'>
          Moderný dizajn s úlohou získavania klientov
        </div>
        <div className='textThin mb-4'>
          Hlavnou úlohou webstránky, je urobiť z potencionálnych zákazníkov
          vašich klientov. Docielíme to pomocou jasnej štruktúry, textov a
          dizajnu určeného na predaj.
        </div>
      </div>
    </div>
  );
};
export default ContentCards;
