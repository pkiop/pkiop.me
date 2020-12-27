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
    return (<S.EventLine x1={xOffset} x2={xOffset + diagonalXDirectionLength}
      y1={height } y2={height - diagonalXDirectionLength} />);
  });

  const eventCircle = events.map((event: IEvent, idx: number) => {
    const xOffset = (idx === 0 ? 0 : (width - diagonalXDirectionLength) / idx);
    const cx = diagonalXDirectionLength + xOffset;
    const cy = diagonalXDirectionLength;
    return (<S.EventCircle cx={cx} cy={cy} r={15} />);
  });
  const svgImage = (
    <svg width={width + 20} height={height + 5}>
      {eventLines}
      {eventCircle}
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
