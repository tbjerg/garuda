import * as React from 'react';
import { Switch } from 'react-router';
import App from './containers/App';
// import HomePage from './containers/HomePage';
import CounterPage from './containers/CounterPage';
import ReaderContainer from "./containers/reader"
import Sidebar from "./components/sidebar"
import FullReactLayout from "./services/routeServices"
import InputContainer from "./containers/codeInput"

export default () => (
  <App>
    <Switch>
      <FullReactLayout exact path="/reader" component={ReaderContainer} sideBar={Sidebar} />
      <FullReactLayout exact path="/counter" component={CounterPage} sideBar={Sidebar} />
      <FullReactLayout path="/" component={InputContainer} sideBar={Sidebar} />
    </Switch>
  </App>
);
