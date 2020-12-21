import React from 'react';
import TimeRange, { ITimeRange } from 'components/molecules/TimeRange';

import * as S from './style';

export interface IRecodeProps {
  title: string;
  imageUrl?: string;
  subTitles: string[];
  timeRange: ITimeRange;
  className?: string;
}

function App({
  title, imageUrl, subTitles, timeRange, className,
}: IRecodeProps) {
  const subTitlesComponent = subTitles.map((subTitle: string) => <div className={'subtitle'} >{subTitle}</div>);
  return (
    <S.Main className={className}>
      <div className="left">
        <img src={imageUrl} alt="temp" />
      </div>
      <div className="right">
        <div className="title">{title}</div>
        <TimeRange {...timeRange} />
        <div className="subTitles">{subTitlesComponent}</div>
      </div>
    </S.Main>
  );
}

export default App;
