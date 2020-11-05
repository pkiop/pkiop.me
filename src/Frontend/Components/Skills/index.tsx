import React from 'react';
import { Fragment, FC, useState, useEffect } from 'react';
import styled from "styled-components";
import coverImg from '@Images/Cover.jpg';
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  height: ${window.innerHeight}px;
  color: blue;
` 

const Cover = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`

const App: FC = () => {
  return (
    <Main>
      <Cover src={coverImg}></Cover>
    </Main>
  )
};

export default App;