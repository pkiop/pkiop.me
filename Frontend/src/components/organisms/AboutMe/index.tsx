import React, {
  useEffect, useRef,
} from 'react';

import profile from 'public/images/profile.png';
import { useComponentSize } from 'hooks/ElementSize';
import { IRecodeProps } from 'components/organisms/Recode';
import * as S from './style';

const getText = () => {
  const fetchData = (
    <>
      <p>안녕하세요! 주니어 웹 프론트엔드 개발자 박상신 입니다.</p>
      <p>
        주어진 목표를 훌륭하게 해내는 것,
        합이 잘 맞는 동료와 같은 목표를 두고 함께 몰입하는 것,
        최고의 결과를 위해 치열하게 토의하는 것,
        다른 사람에게 도움을 주는 것이 가장 행복합니다.
      </p>
    </>);
  return fetchData;
};

const recodeData1: IRecodeProps = {
  title: 'N석봉 (소설 가계부 웹앱)',
  imageUrl: 'https://camo.githubusercontent.com/9acad1537ebb0c3e10abbf4b74ef2d1929c2d504a91e8cd49bfcd1ddbeff4f9d/68747470733a2f2f692e696d6775722e636f6d2f633238335a764a2e706e67',
  subTitles: ['MobX 상태관리', '메인페이지, 가계부 생성 / 수정 / 삭제, 달력 컴포넌트'],
  timeRange: {
    startYear: 2020,
    startMonth: 11,
    endYear: 2020,
    endMonth: 12,
  },
};

const recodeData2: IRecodeProps = {
  title: 'IssueTracker (GitHub Issue clone)',
  imageUrl: 'https://camo.githubusercontent.com/ce45c5a9d876b53d7352015d6261d9aa47d3082bbdb2099d39d0c51ebd0aae4c/68747470733a2f2f692e696d6775722e636f6d2f467877716c37442e706e67',
  subTitles: ['React로 컴포넌트 개발 (메인페이지, Dropdown)', 'Sequelize로 DB와 백엔드 서버 연결'],
  timeRange: {
    startYear: 2020,
    startMonth: 10,
    endYear: 2020,
    endMonth: 11,
  },
};

const recodeData3: IRecodeProps = {
  title: 'LifeManager',
  imageUrl: 'https://raw.githubusercontent.com/pkiop/lifemanager/dev/frontend/src/images/LifemanagerMainLogo.png',
  subTitles: ['Express로 백엔드 구성', 'Bootstrap 프레임워크 활용해서 프론트 구성'],
  timeRange: {
    startYear: 2020,
    startMonth: 3,
    endYear: 2020,
    endMonth: 4,
  },
};

interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}
function App(props: Props) {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

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
  }, [mainComponentSize, mainComponent.current]);

  return (
    <S.Main ref={mainComponent}>
      <S.Title>About Me</S.Title>
      <S.Line />
      <S.Picture src={profile}/>
      <S.MainText>{getText()}</S.MainText>

      <S.Title>Projects</S.Title>
      <S.Line />
      <S.RecodeWrap>
        <a href={'https://github.com/boostcamp-2020/Project16-A-Account-Book'}> <S.Recode {...recodeData1}/></a>
        <a href={'https://github.com/boostcamp-2020/IssueTracker-20'}><S.Recode {...recodeData2}/></a>
        <a href={'https://github.com/pkiop/lifemanager'}><S.Recode {...recodeData3}/></a>
      </S.RecodeWrap>
    </S.Main>
  );
}

export default App;
