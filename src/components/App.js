import React from 'react';
import Provider from '../i18n/Provider';

import { useSelector } from 'react-redux';
import { Switch, Route, Router } from 'react-router-dom';
import { selectedLanguage } from '../redux/selectors';
import history from '../history';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

import Toggle from './ui/Toggles';

import '../sass/index.scss';

function App() {
  const language = useSelector(selectedLanguage);

  return (
    <Provider locale={language}>
      <Router history={history}>
        <Toggle />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
