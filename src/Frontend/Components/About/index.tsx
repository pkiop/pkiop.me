import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';
import AboutMe from '@Components/AboutMe';
import Skills from '@Components/Skills';
import Goto from '@Components/Goto';
import TextSlide from '@Components/TextSlide';
import { getScrollY } from '@Hooks/getScroll';
import { remToPixel } from '@Utils/remToPixel';
import { theme } from '@Styles/theme';

const Main = styled.div`
`

const App: FC = () => {
  const [ aboutMeSize, setAboutMeSize] = useState<Array<number>>([0,0]);
  const [ skillsSize, setSkillsSize] = useState<Array<number>>([0,0]);
  const [ gotoSize, setGotoSize] = useState<Array<number>>([0,0]);
  const [ isAutoScrolled, setIsAutoScrolled ] = useState<boolean>(false);
  const [ isAnimatedGoto, setIsAnimatedGoto ] = useState<boolean>(false);
  const mainComponent = useRef<HTMLDivElement>(null);
  const scrollY = getScrollY();
  const [ running, setRunning ] = useState<boolean>(true); // true로 하면 스크롤 반응 안함

  useEffect(() => {
    const htmlTag = mainComponent.current!.closest('body');
    const skillToTop = aboutMeSize[1] + remToPixel(theme.headerbarHeight);
    if(scrollY > 50 && !isAutoScrolled && running === false) {
      if(running === false) {
        setRunning(true);
        let time = skillToTop;
        setInterval(() => {
          (() => {
            if(time !== 0) {
              
              window.scrollTo(0, skillToTop - time);
              if(time > 500) {
                time -= 40;  
              }
              if(time > 100) {
                time -= 10;
              }
              if(time > 30) {
                time -= 2;
              }
              time--;
              if(time === 0) {
                setIsAutoScrolled(true);
                setRunning(false);
              }
            }
          })();
        }, 1);

      }
    }
    console.log(scrollY);
    console.log("st: ", skillToTop);
    console.log("isAuto ", isAutoScrolled);
    console.log("running", running);
    if(scrollY < skillToTop - 10 && isAutoScrolled && running === false) {
      window.scrollTo(0, 0);
      setIsAutoScrolled(false);
      setRunning(false);
    }

    const GotoQuarter = skillToTop + skillsSize[1] - Math.floor(gotoSize[1] * 0.8);
    if(scrollY > GotoQuarter && !isAnimatedGoto) {
      setIsAnimatedGoto(true);
    }
  }, [aboutMeSize, scrollY])

  return (
    <Main ref={mainComponent}>
      <AboutMe setSize={setAboutMeSize}/>
      <Skills setSize={setSkillsSize}/>
      <Goto setSize={setGotoSize} isAnimated={isAnimatedGoto}/>
      <TextSlide />
    </Main>
  )
};

export default App;