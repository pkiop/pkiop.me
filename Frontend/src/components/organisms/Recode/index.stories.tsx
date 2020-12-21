import React from 'react';
import { ITimeRange } from 'components/molecules/TimeRange';
import GlobalThemeProvider from 'styles/GlobalThemeProvider';
import Recode, { IRecodeProps } from '.';

export default {
  title: 'Organisms/Recodes',
  component: Recode,
};

export interface Props {
}

const testTime: ITimeRange = {
  startYear: 2020,
  startMonth: 3,
  endYear: 2020,
  endMonth: 4,
};

const testInput: IRecodeProps = {
  title: 'Lifemanager',
  subTitles: ['Express로 백엔드 구성', 'Bootstrap으로 FE구성', '기획 및 설계'],
  timeRange: testTime,
  imageUrl: 'https://6.vikiplatform.com/image/a11230e2d98d4a73825a4c10c8c6feb0.jpg?x=b&a=0x0&s=780x436&q=h&e=t&f=t&cb=1',

};

export function Default() {
  return (
    <GlobalThemeProvider>
      <Recode {...testInput}/>
    </GlobalThemeProvider>
  );
}
