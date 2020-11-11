import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import Text from './text';
import frameImg from '@Images/frame.svg';
import Img1 from '@Images/1.jpg';
import Img2 from '@Images/2.jpg';
import Img3 from '@Images/3.jpg';
import Img4 from '@Images/4.jpg';

import { useComponentSize } from '@Hooks/ElementSize';
import { getScrollY } from '@Hooks/getScroll';

import componentTotalHeight from '@Utils/componentTotalHeight';
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  box-sizing: border-box;
  width: 100%;
  position: relative;
  height: ${window.innerHeight}px;
  color: blue;
`; 

const Wrap = styled.div`
  max-width: 1100px; 
  height: 200%; /* 이미지 어디까지 스크롤 될 지 오프셋*/
  margin: 0 auto;
`;

const Title = styled.div`
  position:relative;
  z-index:50;
  margin-top:170px;
  margin-bottom:170px;
  font-size:200px;
  color:#333;
  text-align: center;
`;

const Frame = styled.img`
  /* empty */
`;

const FrameWrap = styled.figure`
  position:absolute; left:0; top:0; right:0; bottom:0; z-index:20;
`

const Fix = styled.div`
  position: sticky; 
  position: -webkit-sticky; 
  top:calc(50vh - 204px); 
  left: 0; 
  z-index: 40; 
  float:left; 
  width:50%;
`

const ImageBlock = styled.div`
  position:relative; 
  width: 240px; 
  height:409px; 
  margin:0 auto;
`;

const ImageSliderWrap = styled.div`
  overflow:hidden; position: absolute; left:15px; top:89px; z-index:10; width:195px; height:237px;
`

const ImageSlider = styled.div`
  width: 780px; height: 100%; transition:transform .5s;
`;

const ImageWrap = styled.figure`
  float:left; width:195px;
`

const Image = styled.img`
`


const Texts = styled.div`
  float:left; 
  width:50%; 
  padding-top:300px;
`;

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>,
  textSlideUpperSize: number,
}

const App: FC<Props> = (props) => {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);
  const scrollTop = props.textSlideUpperSize;
  const scrollY = getScrollY();

  const titleRef = useRef<HTMLDivElement>(null);
  const textsRef = useRef<HTMLDivElement>(null);
  const imageSliderRef = useRef<HTMLDivElement>(null);

  const textRefs = new Array<React.RefObject<HTMLDivElement>>();
  for(let i=0;i<4;++i) {
    textRefs.push(useRef<HTMLDivElement>(null));
  }

  useEffect(() => {
    if(mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      const marginTop = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-top'));
      const marginBottom = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-bottom'));
      props.setSize([mainComponent.current!.scrollWidth, mainComponent.current!.scrollHeight + marginTop + marginBottom]);
    }

    const nowPosition = scrollY - scrollTop;
    console.log("nowPosition : ", nowPosition);
    console.log("scroll : ", scrollY);

    const titleHeight = componentTotalHeight(titleRef);
    console.log("titleHeight : ", titleHeight);
    textRefs.forEach((el) => {
      const totalHeight = componentTotalHeight(el);
      console.log("totalHeight : ", totalHeight);
    })
    const translateOffset = 195;
    if(titleHeight > nowPosition) {
      imageSliderRef.current!.style.transform = `translateX(${translateOffset*0}px)`;
    } else if(titleHeight + componentTotalHeight(textRefs[0]) > nowPosition) {
      imageSliderRef.current!.style.transform = `translateX(${-1 * translateOffset}px)`;
    } else if(titleHeight + componentTotalHeight(textRefs[1]) + componentTotalHeight(textRefs[1]) > nowPosition) {
      imageSliderRef.current!.style.transform = `translateX(${-2 * translateOffset}px)`;
    } else if (componentTotalHeight(textRefs[2]) > nowPosition) {
      imageSliderRef.current!.style.transform = `translateX(${-3 * translateOffset}px)`;
    }
  }, [scrollY]);

  return (
    <Main ref={mainComponent}>
      <Wrap>
        <Title ref={titleRef}>TextSlide</Title>
        <Texts >
          <Text refObj={textRefs[0]} mt={300} mb={0} text={"text1"}/>
          <Text refObj={textRefs[1]} mt={300} mb={0} text={"text2"}/>
          <Text refObj={textRefs[2]} mt={300} mb={0} text={"text3"}/>
          <Text refObj={textRefs[3]} mt={300} mb={500} text={"text4"}/>
        </Texts>
        <Fix>
          <ImageBlock>
            <FrameWrap>
              <Frame src={frameImg}></Frame>
            </FrameWrap>
            <ImageSliderWrap>
              <ImageSlider ref={imageSliderRef}>
                <ImageWrap>
                  <Image src={Img1} />
                </ImageWrap>
                <ImageWrap>
                  <Image src={Img2} />
                </ImageWrap>
                <ImageWrap>
                  <Image src={Img3} />
                </ImageWrap>
                <ImageWrap>
                  <Image src={Img4} />
                </ImageWrap>
              </ImageSlider>
            </ImageSliderWrap>
          </ImageBlock>
          
        </Fix>
      </Wrap>
    </Main>
  )
};

export default App;