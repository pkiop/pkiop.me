import React, {
  useEffect, useState,
} from 'react';
import logo from 'public/images/logo.jpeg';

import MenuLinkBtn from 'components/molecules/MenuLinkBtn';
import HeaderBarMenuDropdown from 'components/organisms/HeaderBar-MenuDropdown';
import hambugBtn from 'public/images/hamburg.svg';
import theme from 'styles/theme';
import { remToPixel } from 'utils/remToPixel';
import { useWindowSize } from 'hooks/ElementSize';
import * as S from './style';

export const burgerOnClick = (clicked: boolean,
  setClicked:React.Dispatch<React.SetStateAction<boolean>>) => () => {
  setClicked(!clicked);
};

function App() {
  const [clicked, setClicked] = useState<boolean>(false);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width > remToPixel(theme.smallWidth)) {
      setClicked(false);
    }
  }, [width]);
  return (
    <S.Main>
      <S.Logo src={logo}/>
      <S.MenuButtons>
        <MenuLinkBtn title="Home" link="/"/>
        <MenuLinkBtn title="Portfolio" link="portfolio" />
        <MenuLinkBtn title="Post" link="post"/>
        <MenuLinkBtn title="TIL" link="til"/>
        <MenuLinkBtn title="LM" link="lm"/>
      </S.MenuButtons>
      <S.BurgerBtn onClick={burgerOnClick(clicked, setClicked)} src={hambugBtn}/>
      <HeaderBarMenuDropdown clicked={clicked}></HeaderBarMenuDropdown>

    </S.Main>
  );
}

export default App;
