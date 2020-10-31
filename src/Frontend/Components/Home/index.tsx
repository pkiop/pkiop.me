import React from 'react';
import HomeImage from '@Images/homeImage.jpg';
import { Fragment, FC, useState, useEffect } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';

const HomeImg = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`

const Main = styled.div`
  height:600px;
`

const App: FC = () => {

  return (
    <Main>
      <HomeImg src={HomeImage}/>
    </Main>
  )
};

export default App;