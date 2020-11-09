import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";

const Main = styled.p`
  max-width:80%;
  font-size:36px; 
  font-family:'NotoM'; 
  color:#333; 
  transition:color .5s;
  margin-top: ${props => props.mt}px;
  margin-bottom: ${props => props.mb}px;
`
interface Props {
  mt: number;
  mb: number;
  text: string;
}

const App: FC<Props> = (props) => {
  return (
    <Main mt={props.mt} mb={props.mb}>
      {props.text} 
    </Main>
  )
};

export default App;