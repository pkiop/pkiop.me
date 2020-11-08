import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled, { keyframes }from "styled-components";
import {
  Link
} from 'react-router-dom';

const text_mask = keyframes`
    0%{
        width: 0%;
        transform:translateX(0%);
    }
    50%{
        width: 100%;
        transform:translateX(0%);
    }
    100%{
        width: 100%;
        transform:translateX(101%);
    }
`;

const Main = styled.div`
  position: relative;
  height:${window.innerHeight}px;
  background-color: green;
`

const Cover = styled.div`
  position: absolute;
  width: 100%;
  top:20%;
`

const Block = styled.div`
  position: relative;
  font-size: 32px;
  padding: 3% 10%;
  margin: 10% 0%;
  background-color: red;
  /* width: 50%; */
`;

const BlockText = styled.div`
  position: absolute;
  padding: 0% 5%;
  height: 100%;
  background-color: skyblue;
  z-index: 10;
`;

const BlockMask = styled.div`
  position:absolute; left:0; top:0; z-index:10; height:100%; background: #fff; animation:${text_mask} 2s 1 cubic-bezier(0.24, 0.77, 0.32, 0.95) both paused;
`;

const BlockUnderMask = styled.div`
  position:absolute; left:0; bottom:0; z-index:9; width:0%; height:40%; background: #e9c400; transition:width .5s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;

const setUnderMaskActive = (ref: React.RefObject<HTMLDivElement>) => () => {
  ref.current!.style.width = "100%";
}

const setUnderMaskPassive = (ref: React.RefObject<HTMLDivElement>) => () => {
  ref.current!.style.width = "0%";
}

const App: FC = () => {
  const bk1 = useRef<HTMLDivElement>(null);
  const bk2 = useRef<HTMLDivElement>(null);
  const bk3 = useRef<HTMLDivElement>(null);
  return (
    <Main>
      <Cover>
        <Block 
        onMouseOver={setUnderMaskActive(bk1)} 
        onMouseOut={setUnderMaskPassive(bk1)}>
          <BlockText>Block1</BlockText>
          <BlockMask />
          <BlockUnderMask ref={bk1}/>
        </Block>
        <Block 
        onMouseOver={setUnderMaskActive(bk2)}
        onMouseOut={setUnderMaskPassive(bk2)}
        >
          <BlockText>Block2</BlockText>
          <BlockMask />
          <BlockUnderMask ref={bk2}/>
        </Block>
        <Block 
        onMouseOver={setUnderMaskActive(bk3)}
        onMouseOut={setUnderMaskPassive(bk3)}
        >
          <BlockText>Block3</BlockText>
          <BlockMask />
          <BlockUnderMask ref={bk3}/>
        </Block>
      </Cover>
      
    </Main>
  )
};

export default App;