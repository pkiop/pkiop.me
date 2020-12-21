import React, {
  useEffect, useRef, useReducer, useState,
} from 'react';

import hideImage from 'public/images/self.png';
import { useComponentSize } from 'hooks/ElementSize';
import { getScrollY } from 'hooks/getScroll';
import ResumeOrMoreInfo from 'components/organisms/ResumeOrMoreInfo';
import * as S from './style';

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>,
  slidingDoorUpperSize: number,
}

function App(props: Props) {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);
  const [scailing, setScailing] = useReducer((state) => !state, false);
  const [introTextVisible, setIntroTextVisible] = useReducer((state) => !state, false);
  const [openResumeOrMoreInfo, setOpenResumeOrMoreInfo] = useState(false);

  const scrollTop = props.slidingDoorUpperSize;
  const scrollY = getScrollY();
  // TODO 0~100까지만 가능한 타입 만들기.
  // 현재는 array이용 배열 생성해서 타입으로 만드는게 방법인 듯

  const HideImageComponent = useRef<HTMLImageElement>(null);
  const LeftDoorComponent = useRef<HTMLDivElement>(null);
  const RightDoorComponent = useRef<HTMLDivElement>(null);
  const IntroTextComponent = useRef<HTMLDivElement>(null);
  const ResumeOrMoreInfoComponent = useRef<HTMLDivElement>(null);

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
      LeftDoorComponent.current!.style.width = `${50 - progress}%`;
      RightDoorComponent.current!.style.width = `${50 - progress}%`;

      if (progress <= 60 && progress >= 41 && !openResumeOrMoreInfo) {
        setOpenResumeOrMoreInfo(true);
        if (ResumeOrMoreInfoComponent.current) {
          ResumeOrMoreInfoComponent.current.classList.add('active');
        }
      }
      if (progress > 60 && openResumeOrMoreInfo) {
        setOpenResumeOrMoreInfo(false);
        if (ResumeOrMoreInfoComponent.current) {
          ResumeOrMoreInfoComponent.current.classList.remove('active');
        }
      }
      if (progress < 41 && openResumeOrMoreInfo) {
        setOpenResumeOrMoreInfo(false);
        if (ResumeOrMoreInfoComponent.current) {
          ResumeOrMoreInfoComponent.current.classList.remove('active');
        }
      }

      if (progress >= 51) {
        LeftDoorComponent.current!.style.width = `${0}%`;
        RightDoorComponent.current!.style.width = `${0}%`;
      }

      if (progress <= 25) {
        // eslint-disable-next-line no-unused-expressions
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
    <S.Main ref={mainComponent}>
      <S.Fix>
        <S.ImageResumeSelectWrap>
          <S.HideImage ref={HideImageComponent} src={hideImage} />
          <ResumeOrMoreInfo refs={ResumeOrMoreInfoComponent}/>
        </S.ImageResumeSelectWrap>
        <S.LeftDoor ref={LeftDoorComponent}/>
        <S.RightDoor ref={RightDoorComponent}/>
        <S.IntroText ref={IntroTextComponent}>
          <S.Text>한장 요약</S.Text>
        </S.IntroText>
      </S.Fix>
    </S.Main>
  );
}

export default App;
