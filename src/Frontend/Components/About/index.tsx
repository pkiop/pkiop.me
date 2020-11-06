import React from 'react';
import { Fragment, FC, useState, useEffect, useRef } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';
import AboutMe from '@Components/AboutMe';
import Skills from '@Components/Skills';

const Main = styled.div`
`

const App: FC = () => {
  const [aboutMeSize, setAboutMeSize] = useState<Array<number>>([0,0]);
  const [skillsSize, setSkillsSize] = useState<Array<number>>([0,0]);

  useEffect(() => {
    console.log("*** in about ***");
    console.log(`
      aboutmesize : ${aboutMeSize}    
      skillssize : ${skillsSize}    
    `)
  }, [aboutMeSize, skillsSize])
  return (
    <Main>
      <AboutMe setSize={setAboutMeSize}/>
      <Skills setSize={setSkillsSize}/>
    </Main>
  )
};

export default App;