import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import Project from './Project';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="project" component={Project}/>
    </Route>
  </Router>
),document.getElementById('root'));
