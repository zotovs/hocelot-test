import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import AutocompletePage from './containers/AutocompletePage';
import FreeTextPage from './containers/FreeTextPage';
import ResultsPage from './containers/ResultsPage';

function App() {
  const [results, setResults] = useState(null);

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/autocomplete" exact>
          <AutocompletePage />
        </Route>
        <Route path="/free-text" exact>
          <FreeTextPage setResults={setResults} />
        </Route>
        <Route path="/results" exact>
          <ResultsPage results={results} />
        </Route>
        <Redirect to="/autocomplete" />
      </Switch>
    </div>
  );
}

export default App;
