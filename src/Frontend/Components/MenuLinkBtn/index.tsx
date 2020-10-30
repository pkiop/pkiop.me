import React from 'react';
import { Fragment, FC, useState, useEffect } from 'react';
import styled from "styled-components";
import {
  Link
} from 'react-router-dom';

const LinkBtn = styled.div`
  margin: 20px;
`

interface Props {
  title: string;
  link: string;
}

const App: FC<Props> = ({ title, link}) => {

  return (
    <>
      <LinkBtn>
        <Link to={link}>{title}</Link>
      </LinkBtn>

    </>
  )
};

export default App;