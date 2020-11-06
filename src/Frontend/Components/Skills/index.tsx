import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import coverImg from '@Images/Cover.jpg';
import { useComponentSize } from '@Hooks/ElementSize';
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
interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}

const App: FC<Props> = (props) => {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  useEffect(() => {
    props.setSize(mainComponentSize);
  }, [mainComponentSize]);
  return (
    <Main ref={mainComponent}>
      <Cover src={coverImg}></Cover>
    </Main>
  )
};

export default App;