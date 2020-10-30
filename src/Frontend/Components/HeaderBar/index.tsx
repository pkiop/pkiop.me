import React from 'react';
import logo from '@Images/logo.png';
import { FC } from 'react';
import styled from "styled-components";
import MenuLinkBtn from '@Components/MenuLinkBtn';

const Logo = styled.img`
  width: 60px;
  height: 60px;
  border: 1px solid black;
`

const Main = styled.div`
  display:flex;
  justify-content: space-between;
  background-color:${(props) => props.theme.mainColor}
`

const App: FC = () => {
    return (
      <Main>
        <Logo src={logo}/>
        <MenuLinkBtn title="Home" link="/"/>
        <MenuLinkBtn title="Portfolio" link="portfolio" />
        <MenuLinkBtn title="Post" link="post"/>
        <MenuLinkBtn title="TIL" link="til"/>
        <MenuLinkBtn title="LM" link="lm"/>
      </Main>
    )
};

export default App;