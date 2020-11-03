import React from 'react';
import { Fragment, FC, useState, useEffect } from 'react';
import styled from "styled-components";
import profile from '@Images/profile.png';
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

const App: FC = () => {
  const [mt, setMt] = useState("");

  useEffect(() => {
    getText().then(res => setMt(res.mainText));
  })

  return (
      <Main>
        <Title>About Me</Title>
        <Line />
        <Picture src={profile}/>
        <MainText>{mt}</MainText>
      </Main>
    )
  };
  

export default App;