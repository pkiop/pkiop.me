import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import HeaderBar from 'components/organisms/HeaderBar';
import Portfolio from 'pages/Portfolio';
import About from 'pages/About';
import Post from 'pages/Post';
import TIL from 'pages/TIL';
import LM from 'pages/LM';

import { theme } from 'styles/theme';
import { GlobalStyle } from 'styles/global-styles';

function App() {
  return (
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
}

export default App;
