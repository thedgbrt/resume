import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory, Router, Route } from 'react-router';
import App from './App';
import Experience from './Experience';
import Project from './Project';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <Route path="projects/:projectName" component={Project}/>
      <Route path="experiences/:experienceName" component={Experience}/>
    </Route>
  </Router>
),document.getElementById('root'));
