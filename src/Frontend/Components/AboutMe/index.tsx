import React, { useLayoutEffect } from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import profile from '@Images/profile.png';
import { useComponentSize } from '@Hooks/ElementSize';
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 1000px;
  margin: 160px 200px;
` 

const Title = styled.div`
  width: 160px;
  height: 35px;
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  margin: 25px;
`
const Line = styled.div`
  width: 80px;
  height: 5px;
  border-radius: 2px;
  background-color: ${props => props.theme.subColor};
  margin-bottom: 50px;
`

const Picture = styled.img`
  width:200px;
  height:200px;
  border-radius: 100px;
  margin: 30px;
`

const MainText = styled.div`
  font-size: 15px;
`

const getText = async () => {
  const result = await fetch('http://localhost:3000/api/aboutme');
  return await result.json();
}

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}
const App: FC<Props> = (props) => {
  const [mt, setMt] = useState("");
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  useEffect(() => {
    props.setSize(mainComponentSize);
    getText().then(res => setMt(res.mainText));
  }, [mainComponentSize]);

  return (
      <Main ref={mainComponent}>
        <Title>About Me</Title>
        <Line />
        <Picture src={profile}/>
        <MainText>{mt}</MainText>
      </Main>
    )
  };
  

export default App;