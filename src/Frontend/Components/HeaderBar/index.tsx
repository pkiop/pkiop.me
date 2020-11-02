import React from 'react';
import logo from '@Images/logo.png';
import { FC, useState } from 'react';
import styled from "styled-components";
import MenuLinkBtn from '@Components/MenuLinkBtn';
import HeaderBarMenuDropdown from '@Components/HeaderBar-MenuDropdown';
import hambugBtn from '@Images/hamburg.svg';


const Logo = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid black;
`

const MenuButtons = styled.div`
  border: 1px solid black;
  @media only screen and (min-width: ${(props) => props.theme.smallWidth}) {
    display: flex;
  }
  @media only screen and (max-width: ${(props) => props.theme.smallWidth}) {
    display: none;
  }
`

const Main = styled.div`
  position: relative;
  display:flex;
  justify-content: space-between;
  background-color:${(props) => props.theme.mainColor};
`

const BurgerBtn = styled.img`
  width: 60px;
  height: 60px;
  @media only screen and (min-width: ${(props) => props.theme.smallWidth}) {
    display: none;
  }
  @media only screen and (max-width: ${(props) => props.theme.smallWidth}) {
    display: flex;
  }
`

const burgerOnClick = (clicked: boolean, setClicked:React.Dispatch<React.SetStateAction<boolean>>) => () => {
  setClicked(clicked ? false : true);
}


const App: FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);
  return (
    <Main>
      <Logo src={logo}/>
      <MenuButtons>
        <MenuLinkBtn title="Home" link="/"/>
        <MenuLinkBtn title="Portfolio" link="portfolio" />
        <MenuLinkBtn title="Post" link="post"/>
        <MenuLinkBtn title="TIL" link="til"/>
        <MenuLinkBtn title="LM" link="lm"/>
      </MenuButtons>
      <BurgerBtn onClick={burgerOnClick(clicked, setClicked)} src={hambugBtn}/>
      <HeaderBarMenuDropdown clicked={clicked}></HeaderBarMenuDropdown>
      
    </Main>
  )
};

export default App;