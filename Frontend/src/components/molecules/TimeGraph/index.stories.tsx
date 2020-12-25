import React from 'react';
import GlobalThemeProvider from '../../../styles/GlobalThemeProvider';
import TimeGraph, { IEvent } from '.';

export default {
  title: 'Molecules/TimeGraph',
  component: TimeGraph,
};

const testData: IEvent[] = [
  {
    startDate: new Date('2017-03-01'),
    endDate: new Date('2018-08-31'),
    title: '코드코치',
  },
  {
    startDate: new Date('2017-09-16'),
    endDate: new Date('2017-12-08'),
    title: '카이스트 융합교육연구센터 학생연구원',
  },
  {
    startDate: new Date('2017-09-16'),
    endDate: new Date('2017-12-08'),
    title: '부스트캠프',
    imageUrl: 'https://scontent-ssn1-1.xx.fbcdn.net/v/t1.0-9/125287036_689721841677550_4471947913044314131_o.png?_nc_cat=108&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeGaDtIgt9_6NkG9EhY13CvQ1H5PakxRz0_Ufk9qTFHPT_69uQhXkQsC3w5pEUIdBRgAuskx1p_LFWxY9D0mq1V7&_nc_ohc=Md_6Duh-2-oAX_9CN33&_nc_ht=scontent-ssn1-1.xx&oh=39aea716ff7c304f8db7b3a2967f8052&oe=600AC519',
  },
];
export function Default() {
  return (
    <GlobalThemeProvider>
      <TimeGraph events={testData}/>
    </GlobalThemeProvider>
  );
}
