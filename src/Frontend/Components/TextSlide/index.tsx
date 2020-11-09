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
`;

const Fix = styled.div`
`

const ImageBlock = styled.div`
`;

const ImageSlider = styled.div`
`;

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
            <Frame src={frameImg}></Frame>
            <ImageSlider>
              <Image src={Img1} />
              <Image src={Img2} />
              <Image src={Img3} />
              <Image src={Img4} />
            </ImageSlider>
          </ImageBlock>
        </Fix>
      </Wrap>
    </Main>
  )
};

export default App;