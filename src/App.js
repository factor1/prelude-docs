import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Home from './Components/Home';
import NotFound from './Components/NotFound';
import './vendor/ginger.css';
import './Styles/Global.css';
import './Styles/prisma-atom.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      pages: [
        {doc: {order: 0, title: 'Getting Started', slug: 'getting-started'}},
        {doc: {order: 1, title: 'Gulp Tasks', slug: 'gulp-tasks'}},
        {doc: {order: 2, title: 'Gulpfile Customization', slug: 'gulpfile-customization'}},
        {doc: {order: 3, title: 'Wordpress Tweaks & Functions', slug: 'wordpress-tweaks-functions'}},
        {doc: {order: 4, title: 'Styles', slug: 'styles'}},
        {doc: {order: 5, title: 'Mixins', slug: 'mixins'}},
        {doc: {order: 6, title: 'JavaScript', slug: 'javascript'}}
      ]
    }
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" component={(props) => <Home pages={this.state.pages} {...props} />} exact />
          <Route path="/:slug" component={(props) => <Home pages={this.state.pages} {...props} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
