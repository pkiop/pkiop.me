import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import coverImg from '@Images/cover.jpg';
import { useComponentSize } from '@Hooks/ElementSize';
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  height: ${window.innerHeight}px;
  color: blue;
` 

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>,
  slidingDoorUpperSize: number,
}

const App: FC<Props> = (props) => {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  useEffect(() => {
    if(mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      props.setSize([mainComponent.current!.offsetWidth, mainComponent.current!.offsetHeight])
    }
  }, [mainComponentSize, mainComponent]);

  return (
    <Main ref={mainComponent}>

    </Main>
  )
};

export default App;