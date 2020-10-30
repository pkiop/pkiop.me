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
import About from '@Components/About';
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
        <Switch>
          <Route exact path="/">
            <Home />
            <HeaderBar />
            <About />
          </Route>
          <Route path="/portfolio">
            <HeaderBar />
            <Portfolio />
          </Route>
          <Route path="/post">
            <HeaderBar />
            <Post />
          </Route>
          <Route path="/TIL">
            <HeaderBar />
            <TIL />
          </Route>
          <Route path="/LM">
            <HeaderBar />
            <LM />
          </Route>
        </Switch>
        </ThemeProvider>

      </BrowserRouter>
    )
};

export default App;