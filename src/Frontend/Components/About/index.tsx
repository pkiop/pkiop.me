import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';
import AboutMe from '@Components/AboutMe';
import Skills from '@Components/Skills';
import Goto from '@Components/Goto';
import { getScrollTop } from '@Hooks/getScroll';
import { remToPixel } from '@Utils/remToPixel';
import { theme } from '@Styles/theme';

const Main = styled.div`
`

const App: FC = () => {
  const [ aboutMeSize, setAboutMeSize] = useState<Array<number>>([0,0]);
  const [ skillsSize, setSkillsSize] = useState<Array<number>>([0,0]);
  const [ isAutoScrolled, setIsAutoScrolled ] = useState<boolean>(false);
  const scrollTop = getScrollTop();

  useEffect(() => {
    const skillToTop = aboutMeSize[1] + remToPixel(theme.headerbarHeight);
    if(scrollTop > 50 && !isAutoScrolled) {
      // window.scrollTo(0, skillToTop);
      setIsAutoScrolled(true);
    }
    if(scrollTop < skillToTop && isAutoScrolled) {
      // window.scrollTo(0, 0);
      setIsAutoScrolled(false);
    }
  }, [aboutMeSize, scrollTop])

  return (
    <Main>
      <AboutMe setSize={setAboutMeSize}/>
      <Skills setSize={setSkillsSize}/>
      <Goto />
    </Main>
  )
};

export default App;