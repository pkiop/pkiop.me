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
  background-color: black;
`

const Cover = styled.div`
  position: relative; z-index: 20;
  top: 20%;
  left: 5%;
`

const Block = styled.div`
  display: flex; 
  position: relative;
  /* width: 50%; */
  /* height: 30px;
  height: 35px; */
`;

const BlockCover = styled.div`
  position:relative; display:inline-block; font-size:140px; line-height: 1; color:#fff; transition:transform .5s;
`

const BlockText = styled.div`
  /* position: absolute;
  top: 0px;
  left: 0px;
  padding: 0% 5%;
  height: 100%;
  z-index: 10;
  font-size: 72px; */
  overflow:hidden; position:relative; z-index: 20; display:inline-block; font-size:140px; line-height: 1; color:#fff; transition:transform .5s;
`;

const BlockMask = styled.div`
  position:absolute; left:0; top:0; z-index:10; height:100%; background: #fff; animation:${text_mask} 2s 1 cubic-bezier(0.24, 0.77, 0.32, 0.95) both paused;
`;

const BlockUnderMask = styled.div`
  position:absolute; left:0; bottom:0; z-index:11; width:10%; height:40%; background: #e9c400; transition:width .5s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;

const setUnderMask= (ref: React.RefObject<HTMLDivElement>, isActive: boolean) => {
  console.log("undermask ref : ", ref);
  if(isActive) {
    ref.current!.style.width = "100%";
  } else {
    ref.current!.style.width = "0%";
  }
}

const setTextMove = (ref: React.RefObject<HTMLDivElement>, isActive: boolean) => {
  if(isActive) {
    ref.current!.style.transform = `translateX(-10px)`;
  } else {
    ref.current!.style.transform = `translateX(+10px)`;
  }
}

const blockMouseOver = (
  textRef: React.RefObject<HTMLDivElement>,
  underLineRef: React.RefObject<HTMLDivElement>,
  isActive: boolean) => {
    return () => {
      setUnderMask(underLineRef, isActive);
      setTextMove(textRef, isActive);
    }
  }



const App: FC = () => {

  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);

  const bk1 = useRef<HTMLDivElement>(null);
  const bk2 = useRef<HTMLDivElement>(null);
  const bk3 = useRef<HTMLDivElement>(null);

  return (
    <Main>
      <Cover>
        <Block 
        onMouseOver={blockMouseOver(text1, bk1, true)} 
        onMouseOut={blockMouseOver(text1, bk1, false)}
        >
          <BlockCover>
            <BlockText ref={text1}>Block1</BlockText>
            <BlockMask />
            <BlockUnderMask ref={bk1}/>
          </BlockCover>
        </Block>
        <Block 
        onMouseOver={blockMouseOver(text2, bk2, true)} 
        onMouseOut={blockMouseOver(text2, bk2, false)}
        >
          <BlockCover>
            <BlockText ref={text2}>Block2</BlockText>
            <BlockMask />
            <BlockUnderMask ref={bk2}/>
          </BlockCover>
        </Block>
        <Block 
        onMouseOver={blockMouseOver(text3, bk3, true)} 
        onMouseOut={blockMouseOver(text3, bk3, false)}
        >
          <BlockCover>
            <BlockText ref={text3}>Block3123123123</BlockText>
            <BlockMask />
            <BlockUnderMask ref={bk3}/>
          </BlockCover>
        </Block>
      </Cover>
      
    </Main>
  )
};

export default App;