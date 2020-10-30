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

const App: FC = () => {
    return (
      <div>
        <Logo src={logo}/>
        <MenuLinkBtn title="home" link="/"/>
        <MenuLinkBtn title="portfolio" link="portfolio" />
        <MenuLinkBtn title="post" link="post"/>
        <MenuLinkBtn title="TIL" link="til"/>
        <MenuLinkBtn title="LM" link="lm"/>
      </div>
    )
};

export default App;