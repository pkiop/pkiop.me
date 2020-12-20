import React, {
  useState, useEffect, useRef,
} from 'react';

import profile from 'public/images/profile.png';
import { useComponentSize } from 'hooks/ElementSize';
import axios from 'axios';
import * as S from './style';

const getText = async () => {
  const fetchData = await axios.get('http://localhost:3000/api/aboutme');
  const res = fetchData;
  return res;
};

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}
function App(props: Props) {
  const [mt, setMt] = useState('');
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
    getText().then((res) => setMt(res.data));
  }, [mainComponentSize, mainComponent.current]);

  return (
    <S.Main ref={mainComponent}>
      <S.Title>About Me</S.Title>
      <S.Line />
      <S.Picture src={profile}/>
      <S.MainText>{mt}</S.MainText>
    </S.Main>
  );
}

export default App;
