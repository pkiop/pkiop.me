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
  diagonalXDirectionLength?: number,
}

function App({
  events, width, height, diagonalXDirectionLength = 50,
}: IProps) {
  const eventLines = events.map((event: IEvent, idx: number) => {
    const xOffset = (idx === 0 ? 0 : (width - diagonalXDirectionLength) / idx);
    console.log(xOffset);
    return (<S.Line x1={xOffset} x2={xOffset + diagonalXDirectionLength}
      y1={height } y2={height - diagonalXDirectionLength} />);
  });
  console.log(eventLines);
  const svgImage = (
    <svg width={width} height={height + 5}>
      {eventLines}
      <S.Line x1={0} y1={height} x2={width - diagonalXDirectionLength} y2={height} />
    </svg>
  );
  return (
    <S.Main>
      {svgImage}
    </S.Main>
  );
}

export default App;
