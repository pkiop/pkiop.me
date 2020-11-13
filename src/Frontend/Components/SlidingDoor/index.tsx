import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import hideImage from '@Images/hideImage.jpg';
import { useComponentSize } from '@Hooks/ElementSize';
import { getScrollY } from '@Hooks/getScroll';
import componentTotalHeight from '@Utils/componentTotalHeight';
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  position: relative;
  display:flex;
  height: ${window.innerHeight * 3}px;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
` 

const Fix = styled.div`
  position: sticky; 
  position: -webkit-sticky; 
  top: 0;
  left: 0; 
  z-index: 40; 
  float:left; 
  width:100%;
  height:${window.innerHeight}px;
`

const HideImage = styled.img`
  position: absolute;
  top:0;
`

const LeftDoor = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height:100%;
  background-color: rgba(100,100,100,0.5);
  z-index: 5;
`

const RightDoor = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height:100%;
  background-color: rgba(0,0,0,0.5);
  z-index: 5;
`

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>,
  slidingDoorUpperSize: number,
}

const App: FC<Props> = (props) => {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  const scrollTop = props.slidingDoorUpperSize;
  const scrollY = getScrollY();
  // TODO 0~100까지만 가능한 타입 만들기. 
  // 현재는 array이용 배열 생성해서 타입으로 만드는게 방법인 듯 
  
  const LeftDoorComponent = useRef<HTMLDivElement>(null);
  const RightDoorComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      const marginTop = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-top'));
      const marginBottom = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-bottom'));
      props.setSize([mainComponent.current!.scrollWidth, mainComponent.current!.scrollHeight + marginTop + marginBottom]);
    }
    const totalHeight = mainComponent.current!.scrollHeight; 
    const scrollRangeMax = totalHeight - window.innerHeight;
    props.setSize([mainComponent.current!.scrollWidth, totalHeight]);
    const progress:number = Math.floor(50 * (scrollY - scrollTop) / (scrollRangeMax));
    console.log(mainComponentSize);
    console.log("scrollY : ", scrollY);
    console.log("scrollTop : ", scrollTop);
    console.log("scrollMax : ", scrollRangeMax);
    console.log("progress : ", progress);
    if(progress >= 0) {
      LeftDoorComponent.current!.style.width = `${100 - progress}%`
      RightDoorComponent.current!.style.width = `${100 - progress}%`
    }


  }, [mainComponentSize, scrollY]);

  return (
    <Main ref={mainComponent}>
      <Fix>
        <HideImage src={hideImage} />
        <LeftDoor ref={LeftDoorComponent}/> 
        <RightDoor ref={RightDoorComponent}/> 
      </Fix>
    </Main>
  )
};

export default App;