import React from 'react';
import dateUtil from 'utils/date';
import * as S from './style';

export interface ITimeRange {
  startYear: number;
  startMonth: number;
  endYear: number;
  endMonth: number;
}

function App({
  startYear, startMonth, endYear, endMonth,
}: ITimeRange) {
  const formattingString = `${dateUtil.addZeroForStringDate(startYear)}/${dateUtil.addZeroForStringDate(startMonth)} ~ ${dateUtil.addZeroForStringDate(endYear)}/${dateUtil.addZeroForStringDate(endMonth)}`;
  return (
    <S.Main>
      <S.DateString>{formattingString}</S.DateString>
    </S.Main>
  );
}

export default App;
