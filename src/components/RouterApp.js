import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import App from '../App';
import info from './info';


function RouterApp() {

  
    return (
  
      <Router>
         <Switch>
        <Route exact path="/" component={App} />
        <Route path="/info/:id" component={info} />
         </Switch>
      </Router>
    );
  }

  export default RouterApp;