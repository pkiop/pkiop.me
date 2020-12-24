import React from 'react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import TimeRange, { ITimeRange } from '.';

export default {
  title: 'Molecules/TimeRange',
  component: TimeRange,
};

export interface Props {
}

const testTime: ITimeRange = {
  startYear: 2020,
  startMonth: 3,
  endYear: 2020,
  endMonth: 4,
};

export function Default() {
  return (
    <GlobalThemeProvider>
      <TimeRange {...testTime}/>
    </GlobalThemeProvider>
  );
}
