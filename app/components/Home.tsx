import * as React from 'react';
import { Link } from 'react-router-dom';

// let styles = require('./Home.scss');

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <div data-tid="container">
          <h2>Home</h2>
          <Link to="/sidebar">to Sidebar </Link>
          <Link to="/counter">to Counter</Link>
          <Link to="/reader">to Reader </Link>
        </div>
      </div >
    );
  }
}
