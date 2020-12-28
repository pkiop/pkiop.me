import React from 'react';
import profile from 'public/images/profile.png';
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
  circleRadius?: number,
}

function App({
  events, width, height, diagonalXDirectionLength = 50, circleRadius = 20,
}: IProps) {
  const eventLines = events.map((event: IEvent, idx: number) => {
    const xOffset = (idx === 0 ? 0 : (width - diagonalXDirectionLength) / idx);
    return (<S.EventLine x1={xOffset} x2={xOffset + diagonalXDirectionLength}
      y1={height } y2={height - diagonalXDirectionLength} />);
  });

  const eventCircle = events.map((event: IEvent, idx: number) => {
    const xOffset = (idx === 0 ? 0 : (width - diagonalXDirectionLength + 350) / idx);
    const cx = diagonalXDirectionLength + xOffset;
    const cy = diagonalXDirectionLength;
    return (
      <g>
        <a href="/">
          <image href={profile} x={cx / 2} y={cy / 2} width={50} height={50} rx={25} ry={25}/>
        </a>
      </g>
    );
  });
  const svgImage = (
    <svg width={width + circleRadius + 5} height={height + 5}>
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
