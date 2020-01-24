import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import Header from './components/Header';
import GlobalStyles from './styles/GlobalStyles';
import AutocompletePage from './containers/AutocompletePage';
import FreeTextPage from './containers/FreeTextPage';
import ResultsPage from './containers/ResultsPage';
import LoginPage from './containers/LoginPage';
import useAuth from './hooks/useAuth';

function App() {
  const [results, setResults] = useState({
    loaded: false,
    item: null,
  });

  const { isLoggedIn, handleLogIn } = useAuth();

  const handleSetResults = item => {
    setResults({
      loaded: true,
      item,
    });
  };

  if (!isLoggedIn) {
    return (
      <>
        <Route path="/" exact>
          <LoginPage onLogin={handleLogIn} />
        </Route>
        <Redirect to="/" />
      </>
    );
  }

  return (
    <div>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route path="/autocomplete" exact>
          <AutocompletePage />
        </Route>
        <Route path="/free-text" exact>
          <FreeTextPage onSetResults={handleSetResults} />
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
