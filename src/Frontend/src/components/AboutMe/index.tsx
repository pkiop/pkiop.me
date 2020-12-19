import React, {
  FC, useState, useEffect, useRef,
} from 'react';

import styled from 'styled-components';
import profile from 'public/images/profile.png';
import { useComponentSize } from 'hooks/ElementSize';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  margin: 160px 200px;
`;

const Title = styled.div`
  width: 160px;
  height: 35px;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  margin: 25px;
`;
const Line = styled.div`
  width: 80px;
  height: 5px;
  border-radius: 2px;
  background-color: ${(props) => props.theme.subColor};
  margin-bottom: 50px;
`;

const Picture = styled.img`
  width:200px;
  height:200px;
  border-radius: 100px;
  margin: 30px;
`;

const MainText = styled.div`
  font-size: 15px;
`;

const getText = async () => {
  const fetchData = await fetch('http://localhost:3000/api/aboutme');
  const res = await fetchData.json();
  return res;
};

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}
const App: FC<Props> = (props) => {
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
    getText().then((res) => setMt(res.mainText));
  }, [mainComponentSize, mainComponent.current]);

  return (
    <Main ref={mainComponent}>
      <Title>About Me</Title>
      <Line />
      <Picture src={profile}/>
      <MainText>{mt}</MainText>
    </Main>
  );
};

export default App;
