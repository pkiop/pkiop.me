import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { ThemeProvider } from 'styled-components';

import HeaderBar from '@Components/HeaderBar';
import Portfolio from '@Components/Portfolio';
import Home from '@Components/Home';
import Post from '@Components/PostComponent';
import TIL from '@Components/TIL';
import LM from '@Components/LM';
import { FC } from 'react';

import { theme } from '@Styles/theme';
import { GlobalStyle } from '@Styles/global-styles';

const App: FC = () => {
    return (
      <BrowserRouter>        
        <ThemeProvider theme={theme}>
        <GlobalStyle />
        <HeaderBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/post">
            <Post />
          </Route>
          <Route path="/TIL">
            <TIL />
          </Route>
          <Route path="/LM">
            <LM />
          </Route>
        </Switch>
        </ThemeProvider>

      </BrowserRouter>
    )
};

export default App;