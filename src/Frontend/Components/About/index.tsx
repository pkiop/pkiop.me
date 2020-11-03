import React from 'react';
import { Fragment, FC, useState, useEffect } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';
import AboutMe from '@Components/AboutMe';
import Skills from '@Components/Skills';

const Main = styled.div`
`

const App: FC = () => {

  return (
    <Main>
      <AboutMe />
      <Skills />
    </Main>
  )
};

export default App;