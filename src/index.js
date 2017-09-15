import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import registerServiceWorker from './registerServiceWorker';

import './vendor/ginger.css';
import './Styles/Global.css';

ReactDOM.render(
  <Router>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route component={NotFound} />
    </Switch>
  </Router>, document.getElementById('root'));
registerServiceWorker();
