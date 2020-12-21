import React, {
  useState, useEffect, useRef,
} from 'react';

import AboutMe from 'components/organisms/AboutMe';
import SlidingDoor from 'components/organisms/SlidingDoor';
import { getScrollY } from 'hooks/getScroll';
import { remToPixel } from 'utils/remToPixel';
import theme from 'styles/theme';
import PleaseScroll from 'components/organisms/PleaseScroll';
import * as S from './style';

function App() {
  const [aboutMeSize, setAboutMeSize] = useState<Array<number>>([0, 0]);
  const [skillsSize, setSkillsSize] = useState<Array<number>>([0, 0]);
  const [gotoSize, setGotoSize] = useState<Array<number>>([0, 0]);
  const [textSlideSize, setTextSlideSize] = useState<Array<number>>([0, 0]);
  const [slidingDoorSize, setSlidingDoorSize] = useState<Array<number>>([0, 0]);
  const [textSlideUpperSize, setTextSlideUpperSize] = useState<number>(0);
  const [slidingDoorUpperSize, setSlidingDoorUpperSize] = useState<number>(0);

  const [isAnimatedGoto, setIsAnimatedGoto] = useState<boolean>(false);
  const mainComponent = useRef<HTMLDivElement>(null);
  const scrollY = getScrollY();

  useEffect(() => {
    setSlidingDoorUpperSize(remToPixel(theme.headerbarHeight)
      + remToPixel(theme.pleaseSlideHeight));
    const skillToTop = aboutMeSize[1]
      + remToPixel(theme.headerbarHeight)
      + remToPixel(theme.pleaseSlideHeight);
    setTextSlideUpperSize(aboutMeSize[1]
      + skillsSize[1] * 2
      + remToPixel(theme.headerbarHeight)
      + remToPixel(theme.pleaseSlideHeight));

    const GotoQuarter = skillToTop + skillsSize[1] - Math.floor(gotoSize[1] * 0.8);
    if (scrollY > GotoQuarter && !isAnimatedGoto) {
      setIsAnimatedGoto(true);
    }
  }, [aboutMeSize, scrollY]);

  return (
    <S.Main ref={mainComponent}>
      <PleaseScroll />
      <SlidingDoor setSize={setSlidingDoorSize} slidingDoorUpperSize={slidingDoorUpperSize}/>
      <AboutMe setSize={setAboutMeSize}/>
    </S.Main>
  );
}

export default App;
