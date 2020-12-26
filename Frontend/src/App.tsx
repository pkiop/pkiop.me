import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';

import HeaderBar from 'components/organisms/HeaderBar';
import About from 'pages/About';
import Post from 'pages/Post';
import TIL from 'pages/TIL';
import LM from 'pages/LM';

import GlobalThemeProvider from 'styles/GlobalThemeProvider';

function App() {
  return (
    <BrowserRouter>
      <GlobalThemeProvider>
        <Switch>
          <Route exact path="/">
            <HeaderBar />
            <About />
          </Route>
          <Route path="/portfolio">
            <HeaderBar />
            <About />
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
      </GlobalThemeProvider>
    </BrowserRouter>
  );
}

export default App;
