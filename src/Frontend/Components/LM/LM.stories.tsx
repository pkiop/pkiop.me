import React from 'react';
import LM from './index';

export default {
  title: "LM",
  component: LM,
};

export const HELLO = () => {
  const subTitle = "HELLO";
  return <LM subTitle={subTitle} />;
};

export const BYE = () => {
  const subTitle = "BYE";
  return <LM subTitle={subTitle} />;
};
