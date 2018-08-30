import * as React from 'react';
import { Switch, Route } from 'react-router';
import App from './containers/App';
import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ReaderContainer from "./containers/reader"
import Sidebar from "./components/sidebar"
export default () => (
  <App>
    <Switch>
      <Route path="/sidebar" component={Sidebar} />
      <Route exact path="/reader" component={ReaderContainer}  />
      <Route path="/counter" component={CounterPage} />
      <Route path="/" component={HomePage} />
    </Switch>
  </App>
);
