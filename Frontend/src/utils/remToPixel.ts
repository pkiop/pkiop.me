import { theme } from 'styles/theme';

export const dummy = 1;

export const remToPixel = (remValue: string) : number => {
  const remNum = Number(remValue.substr(0, remValue.length - 3));

  return remNum * theme.mainFontSize;
};
