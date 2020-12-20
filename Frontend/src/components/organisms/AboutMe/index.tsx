import React, {
  useState, useEffect, useRef,
} from 'react';

import profile from 'public/images/profile.png';
import { useComponentSize } from 'hooks/ElementSize';
import * as S from './style';

const getText = () => {
  const fetchData = (
    <>
      <p>안녕하세요! 주니어 웹 프론트엔드 개발자 박상신 입니다.</p>
      <p>
        주어진 목표를 훌륭하게 해내는 것,
        합이 잘 맞는 동료와 같은 목표를 두고 함께 몰입하는 것,
        최고의 결과를 위해 치열하게 토의하는 것,
        다른 사람에게 도움을 주는 것이 가장 행복합니다.
      </p>
    </>);
  return fetchData;
};

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}
function App(props: Props) {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  useEffect(() => {
    if (mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      const marginTop = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-top'), 10);
      const marginBottom = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-bottom'), 10);
      props.setSize([
        mainComponent.current!.scrollWidth,
        mainComponent.current!.scrollHeight + marginTop + marginBottom,
      ]);
    }
  }, [mainComponentSize, mainComponent.current]);

  return (
    <S.Main ref={mainComponent}>
      <S.Title>About Me</S.Title>
      <S.Line />
      <S.Picture src={profile}/>
      <S.MainText>{getText()}</S.MainText>
    </S.Main>
  );
}

export default App;
