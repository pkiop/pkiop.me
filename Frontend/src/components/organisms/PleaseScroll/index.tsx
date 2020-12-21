import React, { useEffect, useRef } from 'react';
import { getScrollY } from 'hooks/getScroll';

import * as S from './style';

function App() {
  const MainComponent = useRef<HTMLDivElement>(null);
  const scrollY = getScrollY();
  useEffect(() => {
    if (scrollY > 160) {
      MainComponent.current!.classList.add('disable');
    } else {
      MainComponent.current!.classList.remove('disable');
    }
  }, [scrollY]);
  return (
    <S.Main ref={MainComponent}>
      <div>PKIOP가 궁금하시면? Scroll👇 </div>
    </S.Main>
  );
}

export default App;
