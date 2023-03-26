import { useState } from 'react';
import ListPoint from './ListPoint';

const List = () => {
  const [listPoints, setListPoints] = useState([
    {
      id: 1,
      text: 'Kancelárie, ktoré chcú previesť svoje súčasné webové stránky na vysokokvalitný a online marketing.',
    },
    {
      id: 2,
      text: 'Kancelárie, ktoré chcú preniesť svoje offline podnikanie do online sveta.',
    },
    {
      id: 3,
      text: 'Kancelárie ktoré chcú porozumieť tomu ako dokážu zlepšiť ich výsledky v online priestore pomocou kampaní.',
    },
    {
      id: 4,
      text: 'Kancelárie, ktoré hľadajú príležitosť ako maximalizovať množstvo a hodnotu dopytov.',
    },
    {
      id: 5,
      text: 'Kancelárie, ktoré hľadajú spoľahlivú agentúru,vďaka ktorej bude ich spoločnosť prioritou.',
    },
  ]);
  return (
    <ul>
      {listPoints.map(point => (
        <ListPoint key={point.id} point={point} />
      ))}
    </ul>
  );
};
export default List;
