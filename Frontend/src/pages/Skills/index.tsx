import React, {
  FC, useEffect, useRef,
} from 'react';

import styled from 'styled-components';
import coverImg from 'public/images/cover.jpg';
import { useComponentSize } from 'hooks/ElementSize';

const Main = styled.div`
  height: ${window.innerHeight}px;
  color: blue;
`;

const Cover = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`;
interface Props {
  setSize: React.Dispatch<React.SetStateAction<number[]>>
}

function Skills(props: Props) {
  const mainComponent = useRef<HTMLDivElement>(null);
  const mainComponentSize = useComponentSize(mainComponent);

  useEffect(() => {
    if (mainComponentSize[0] !== 0 || mainComponentSize[1] !== 0) {
      props.setSize(mainComponentSize);
    } else {
      props.setSize([mainComponent.current!.offsetWidth, mainComponent.current!.offsetHeight]);
    }
  }, [mainComponentSize, mainComponent]);
  return (
    <Main ref={mainComponent}>
      <Cover src={coverImg}></Cover>
    </Main>
  );
}

export default Skills;
