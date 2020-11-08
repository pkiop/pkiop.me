import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';
import AboutMe from '@Components/AboutMe';
import Skills from '@Components/Skills';
import Goto from '@Components/Goto';
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
  const scrollY = getScrollY();

  useEffect(() => {
    const skillToTop = aboutMeSize[1] + remToPixel(theme.headerbarHeight);
    if(scrollY > 50 && !isAutoScrolled) {
      // window.scrollTo(0, skillToTop);
      setIsAutoScrolled(true);
    }
    if(scrollY < skillToTop && isAutoScrolled) {
      // window.scrollTo(0, 0);
      setIsAutoScrolled(false);
    }

    const GotoQuarter = skillToTop + skillsSize[1] - Math.floor(gotoSize[1] * 0.8);
    if(scrollY > GotoQuarter && !isAnimatedGoto) {
      setIsAnimatedGoto(true);
    }
  }, [aboutMeSize, scrollY])

  return (
    <Main>
      <AboutMe setSize={setAboutMeSize}/>
      <Skills setSize={setSkillsSize}/>
      <Goto setSize={setGotoSize} isAnimated={isAnimatedGoto}/>
    </Main>
  )
};

export default App;