import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import AutocompletePage from './containers/AutocompletePage';
import FreeTextPage from './containers/FreeTextPage';
import ResultsPage from './containers/ResultsPage';

function App() {
  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/autocomplete" exact>
          <AutocompletePage />
        </Route>
        <Route path="/free-text" exact>
          <FreeTextPage />
        </Route>
        <Route path="/results" exact>
          <ResultsPage />
        </Route>
        <Redirect to="/autocomplete" />
      </Switch>
    </div>
  );
}

export default App;
