import React, {
  FC,
} from 'react';
import HomeImage from '@Images/homeImage.jpg';

import styled from 'styled-components';

const HomeImg = styled.img`
  width:100%;
  height:100%;
  object-fit: cover;
`;

const Main = styled.div`
  height:600px;
`;

const App: FC = () => (
  <Main>
    <HomeImg src={HomeImage}/>
  </Main>
);

export default App;
