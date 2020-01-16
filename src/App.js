import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';

function App() {
  return (
    <div>
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
