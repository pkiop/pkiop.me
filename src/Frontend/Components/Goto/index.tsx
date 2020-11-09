import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled, { keyframes }from "styled-components";
import { useComponentSize } from '@Hooks/ElementSize';
import circleSvg from '@Images/gotocircle.svg';
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

const text_opacity = keyframes`
  0%{
      opacity: 0;
      color:#3535ff;
      transform:translateX(-50%);
  }
  100%{
      opacity: 1;
      color:#fff;
      transform:translateX(0%);
  }
`;

const rotate_bg = keyframes`
  0%{
      transform:rotate(0deg);
  }
  100%{
      transform:rotate(360deg);
  }
`;

const Main = styled.div`
  overflow: hidden;
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
`;

const BlockCover = styled.div`
  overflow: hidden;
  font-weight: 600;
  position:relative; 
  display:inline-block;
  font-size:140px;
  line-height: 1; 
  color:#fff;
  transition:transform .5s;
`

const BlockText = styled.div`
  position:relative;
  z-index: 20;
  display:inline-block;
  font-size:140px;
  line-height: 1;
  color:#fff;
  transition:transform .5s;
  animation:${text_opacity} 2s 1s 1 cubic-bezier(0.24, 0.77, 0.32, 0.95) both paused;
`;

const BlockMask = styled.div`
  overflow:hidden; 
  position:absolute;
  left:0;
  top:0;
  z-index:10;
  height:100%;
  background: #fff;
  animation:${text_mask} 2s 1 cubic-bezier(0.24, 0.77, 0.32, 0.95) both paused;
`;

const BlockUnderMask = styled.div`
  position:absolute; left:0; bottom:0; z-index:11; width:0%; height:40%; background: #e9c400; transition:width .5s cubic-bezier(0.24, 0.77, 0.32, 0.95);
`;

const CircleImage = styled.img`
  background-color: gray;
  position:absolute; left:50%; top:50%; z-index:10; width:1200px; height:1215px; margin-left:-357px; margin-top:-350px;  background-size:cover; opacity: .15; animation:${rotate_bg} 40s infinite linear running;
/* background-image:url('../images/bg_rotate01.png'); background-repeat: no-repeat; */
`

const setUnderMask= (ref: React.RefObject<HTMLDivElement>, isActive: boolean) => {
  if(isActive) {
    ref.current!.style.width = "100%";
  } else {
    ref.current!.style.width = "0%";
  }
}

const setTextMove = (ref: React.RefObject<HTMLDivElement>, isActive: boolean) => {
  console.log("ref : ", ref);
  if(isActive) {
    console.log("active");
    ref.current!.style.transform = `translateX(-10px)`;
    ref.current!.style.webkitTransform = `translateX(-10px)`; 
  } else {
    ref.current!.style.transform = ``;
  }
}

const blockMouseOver = (
  textRef: React.RefObject<HTMLDivElement>,
  underLineRef: React.RefObject<HTMLDivElement>,
  isActive: boolean) => {
    return () => {
      setTextMove(textRef, isActive);
      setUnderMask(underLineRef, isActive);
    }
  }

const runningAnimation = (elements: Array<React.RefObject<HTMLDivElement>>) => {
  elements.forEach((el) => {
    el.current!.style.animationPlayState = "running";
  })
}

interface Props {
  isAnimated: boolean;
  setSize: React.Dispatch<React.SetStateAction<number[]>>
};

const App: FC<Props> = (props) => {

  const blockCover1 = useRef<HTMLDivElement>(null);
  const blockCover2 = useRef<HTMLDivElement>(null);
  const blockCover3 = useRef<HTMLDivElement>(null);
  const blockCover4 = useRef<HTMLDivElement>(null);

  const text1 = useRef<HTMLDivElement>(null);
  const text2 = useRef<HTMLDivElement>(null);
  const text3 = useRef<HTMLDivElement>(null);
  const text4 = useRef<HTMLDivElement>(null);

  const underLine1 = useRef<HTMLDivElement>(null);
  const underLine2 = useRef<HTMLDivElement>(null);
  const underLine3 = useRef<HTMLDivElement>(null);
  const underLine4 = useRef<HTMLDivElement>(null);

  const mask1 = useRef<HTMLDivElement>(null);
  const mask2 = useRef<HTMLDivElement>(null);
  const mask3 = useRef<HTMLDivElement>(null);
  const mask4 = useRef<HTMLDivElement>(null);

  const bgImage = useRef<HTMLImageElement>(null);

  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  useEffect(() => {
    if(mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      const marginTop = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-top'));
      const marginBottom = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-bottom'));
      props.setSize([mainComponent.current!.scrollWidth, mainComponent.current!.scrollHeight + marginTop + marginBottom]);
    }
    if(props.isAnimated === true) {
      runningAnimation([text1, text2, text3, text4, mask1, mask2, mask3, mask4]);
    }
  }, [props.isAnimated, mainComponentSize, mainComponent.current]);


  return (
    <Main ref={mainComponent}>
      <Cover>
        <Block>
          <BlockCover ref={blockCover1}
          onMouseOver={blockMouseOver(blockCover1, underLine1, true)} 
          onMouseOut={blockMouseOver(blockCover1, underLine1, false)}
          >
            <BlockText ref={text1}>Block1</BlockText>
            <BlockMask ref={mask1}/>
            <BlockUnderMask ref={underLine1}/>
          </BlockCover>
        </Block>
        <Block>
          <BlockCover ref={blockCover2}
          onMouseOver={blockMouseOver(blockCover2, underLine2, true)} 
          onMouseOut={blockMouseOver(blockCover2, underLine2, false)}
          >
            <BlockText ref={text2}>Block2</BlockText>
            <BlockMask ref={mask2}/>
            <BlockUnderMask ref={underLine2}/>
          </BlockCover>
        </Block>
        <Block>
          <BlockCover ref={blockCover3}
          onMouseOver={blockMouseOver(blockCover3, underLine3, true)} 
          onMouseOut={blockMouseOver(blockCover3, underLine3, false)}
          >
            <BlockText ref={text3}>Block3123123123</BlockText>
            <BlockMask ref={mask3}/>
            <BlockUnderMask ref={underLine3}/>
          </BlockCover>
        </Block>
        <Block>
          <BlockCover ref={blockCover4}
          onMouseOver={blockMouseOver(blockCover4, underLine4, true)} 
          onMouseOut={blockMouseOver(blockCover4, underLine4, false)}
          >
            <BlockText ref={text4}>Block네번째</BlockText>
            <BlockMask ref={mask4}/>
            <BlockUnderMask ref={underLine4}/>
          </BlockCover>
        </Block>
      </Cover>
      <CircleImage ref={bgImage} src={circleSvg}/> 
      
    </Main>
  )
};

export default App;