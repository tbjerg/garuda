import * as React from 'react';
import { Switch } from 'react-router';
import App from './containers/App';
import Sidebar from "./custom/component/sidebar"
import FullReactLayout from "./services/fullLayout"
import InputContainer from "./custom/container/codeInput"
export default () => (
  <App>
    <Switch>
      <FullReactLayout path="/" component={InputContainer} sideBar={Sidebar} />
    </Switch>
  </App>
);
