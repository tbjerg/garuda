import * as React from 'react';
import { Switch } from 'react-router';
import App from './containers/App';
import FullReactLayout from "./services/fullLayout"
import CodeInputPage from "./custom/container/codeInputPage"

export default () => (
  <App>
    <Switch>
      <FullReactLayout exact path="/" component={CodeInputPage} />
    </Switch>
  </App>
);
