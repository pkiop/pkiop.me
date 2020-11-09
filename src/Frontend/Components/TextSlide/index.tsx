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
import {
  Link
} from 'react-router-dom';

const Main = styled.div`
  width: 100%;
  position: relative;
  height: ${window.innerHeight}px;
  color: blue;
`; 

const Wrap = styled.div`
  max-width: 1100px; 
  height: 100%;
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
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}

const App: FC<Props> = (props) => {

  return (
    <Main>
      <Wrap>
        <Title>TextSlide</Title>
        <Texts>
          <Text mt={0} mb={0} text={"text1"}/>
          <Text mt={300} mb={0} text={"text1"}/>
          <Text mt={300} mb={0} text={"text1"}/>
          <Text mt={300} mb={500} text={"text1"}/>
        </Texts>
        <Fix>
          <ImageBlock>
            <FrameWrap>
              <Frame src={frameImg}></Frame>
            </FrameWrap>
            <ImageSliderWrap>
              <ImageSlider>
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