import { theme } from 'styles/theme';

export const dummy = 1;

export const remToPixel = (remValue: string | number) : number => {
  if (typeof remValue === 'string') {
    const remNum = Number(remValue.substr(0, remValue.length - 3));
    return remNum * theme.mainFontSize;
  }
  if (typeof remValue === 'number') {
    return remValue * theme.mainFontSize;
  }
  return -1;
};
