import { theme } from '@Styles/theme';

export const remToPixel = (remValue: string) : number => {
  const remNum = Number(remValue.substr(0, remValue.length - 3));
  
  return remNum * theme.mainFontSize;
}
