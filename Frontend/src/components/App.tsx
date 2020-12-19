import React, { FC } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HeaderBar from 'components/HeaderBar';
import Portfolio from 'components/Portfolio';
import Home from 'components/Home';
import About from 'components/About';
import Post from 'components/PostComponent';
import TIL from 'components/TIL';
import LM from 'components/LM';

import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/global-styles';

const App: FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route exact path="/">
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
);

export default App;
