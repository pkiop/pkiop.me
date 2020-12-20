import React from 'react';
import * as S from './style';

interface Props {
  children: string | string[] | JSX.Element;
  className?: string;
}

function App({ children, className }: Props) {
  return (

    <S.Main className={className}>
      {children}
    </S.Main>
  );
}

export default App;
