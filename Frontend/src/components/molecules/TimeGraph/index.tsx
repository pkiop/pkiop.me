import React from 'react';
import * as S from './style';

export interface IEvent {
  startDate?: Date,
  endDate?: Date,
  title: string,
  description?: string,
  imageUrl?: string,
}

interface IProps {
  events: IEvent[],
  width: number,
  height: number,
}
function App({ events }: IProps) {
  console.log('Event : ', events);

  const svgImage = (
    <svg width={500} height={100}>
      <S.Line x1="50" y1="50" x2="400" y2="50" />
    </svg>
  );
  return (
    <S.Main>
      <div>이벤트들</div>
      {svgImage}
    </S.Main>
  );
}

export default App;
