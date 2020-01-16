import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Normalize } from 'styled-normalize';

import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
      <Normalize />
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/autocomplete" exact>
          autocomplete
        </Route>
        <Route path="/free-text" exact>
          freetext
        </Route>
        <Redirect to="/autocomplete" />
      </Switch>
    </div>
  );
}

export default App;
