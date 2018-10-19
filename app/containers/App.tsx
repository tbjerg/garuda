import * as React from 'react';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faThumbtack } from '@fortawesome/free-solid-svg-icons'

library.add(faStroopwafel, faThumbtack)

export default class App extends React.Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
