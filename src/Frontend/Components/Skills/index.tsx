import React from 'react';
import { Fragment, FC, useState, useEffect } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  height: 1000px;
  color: blue;
` 
const App: FC = () => {

  return (
    <Main>
      <h1>Skills</h1> 
    </Main>
  )
};

export default App;