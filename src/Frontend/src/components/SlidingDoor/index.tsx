import React, {
  FC, useEffect, useRef, useReducer,
} from 'react';

import styled from 'styled-components';
import hideImage from 'images/hideImage.jpg';
import { useComponentSize } from 'hooks/ElementSize';
import { getScrollY } from 'hooks/getScroll';

const Main = styled.div`
  position: relative;
  display:flex;
  height: ${window.innerHeight * 3}px;
  background: rgb(2,0,36);
  background: linear-gradient(180deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 35%, rgba(0,212,255,1) 100%);
`;

const Fix = styled.div`
  overflow: hidden;
  position: sticky; 
  position: -webkit-sticky; 
  top: 0;
  left: 0; 
  z-index: 40; 
  float:left; 
  width:100%;
  height:${window.innerHeight}px;
`;

const HideImage = styled.img`
  position: absolute;
  transform: scale(1.5);
  top:0;
`;

const LeftDoor = styled.div`
  position: absolute;
  left: 0;
  width: 50%;
  height:100%;
  background-color: rgba(100,100,100,1);
  z-index: 5;
`;

const RightDoor = styled.div`
  position: absolute;
  right: 0;
  width: 50%;
  height:100%;
  background-color: rgba(0,0,0,1);
  z-index: 5;
`;

const IntroText = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(255,255,255);
  opacity: 1;
  z-index: 3;
`;

const EndingText = styled.div`
  position: absolute; 
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  background-color: rgb(255,255,255);
  opacity: 0;
  z-index: 3;
`;

const Text = styled.div`
  font-size: 40px;
`;

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>,
  slidingDoorUpperSize: number,
}

const App: FC<Props> = (props) => {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);
  const [scailing, setScailing] = useReducer((state) => !state, false);
  const [introTextVisible, setIntroTextVisible] = useReducer((state) => !state, false);
  const [endingTextVisible, setEndingTextVisible] = useReducer((state) => !state, false);

  const scrollTop = props.slidingDoorUpperSize;
  const scrollY = getScrollY();
  // TODO 0~100까지만 가능한 타입 만들기.
  // 현재는 array이용 배열 생성해서 타입으로 만드는게 방법인 듯

  const HideImageComponent = useRef<HTMLImageElement>(null);
  const LeftDoorComponent = useRef<HTMLDivElement>(null);
  const RightDoorComponent = useRef<HTMLDivElement>(null);
  const IntroTextComponent = useRef<HTMLDivElement>(null);
  const EndingTextComponent = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      const marginTop = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-top'), 10);
      const marginBottom = parseInt(window.getComputedStyle(mainComponent.current as Element).getPropertyValue('margin-bottom'), 10);
      props.setSize([
        mainComponent.current!.scrollWidth,
        mainComponent.current!.scrollHeight + marginTop + marginBottom,
      ]);
    }
    const totalHeight = mainComponent.current!.scrollHeight;
    const scrollRangeMax = totalHeight - window.innerHeight;
    props.setSize([mainComponent.current!.scrollWidth, totalHeight]);
    const progress:number = Number(((50 * (scrollY - scrollTop)) / scrollRangeMax).toFixed(2));
    if (progress >= 0) {
      if (progress >= 0 && progress < 5) {
        if (!introTextVisible) {
          setIntroTextVisible();
          IntroTextComponent.current!.style.opacity = String(1);
        }
      }
      if (progress >= 5 && progress <= 15) {
        if (!introTextVisible) {
          setIntroTextVisible();
        }
        const introOpacity = (10 - (progress - 5)) * 0.1;
        IntroTextComponent.current!.style.opacity = String(introOpacity);
      } else if (introTextVisible) {
        setIntroTextVisible();
        IntroTextComponent.current!.style.opacity = String(0);
      }
      if (progress >= 40) {
        if (!endingTextVisible) {
          setEndingTextVisible();
        }
        const endingOpacity = (progress - 40) * 0.1;
        EndingTextComponent.current!.style.opacity = String(endingOpacity);
      } else if (endingTextVisible) {
        setIntroTextVisible();
          EndingTextComponent.current!.style.opacity = String(0);
      }
      LeftDoorComponent.current!.style.width = `${50 - progress}%`;
      RightDoorComponent.current!.style.width = `${50 - progress}%`;
      if (progress <= 25) {
        !scailing && setScailing();
        HideImageComponent.current!.style.transform = `scale(${1.5 - Number((progress * 0.02).toFixed(2))})`;
      } else if (scailing === true) {
          HideImageComponent.current!.style.transform = 'scale(1.0)';
          setScailing();
      }
    } else {
      if (scailing === true) {
        HideImageComponent.current!.style.transform = 'scale(1.5)';
        setScailing();
      }
      LeftDoorComponent.current!.style.width = '50%';
      RightDoorComponent.current!.style.width = '50%';
    }
  }, [mainComponentSize, scrollY]);

  return (
    <Main ref={mainComponent}>
      <Fix>
        <HideImage ref={HideImageComponent} src={hideImage} />
        <LeftDoor ref={LeftDoorComponent}/>
        <RightDoor ref={RightDoorComponent}/>
        <IntroText ref={IntroTextComponent}>
          <Text>IntroText</Text>
        </IntroText>
        <EndingText ref={EndingTextComponent}>
          <Text>EndingText</Text>
        </EndingText>
      </Fix>
    </Main>
  );
};

export default App;
