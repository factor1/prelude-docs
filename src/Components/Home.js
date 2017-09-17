import React, { Component } from 'react';
import {
Route
} from 'react-router-dom';
import Hero from './Hero';
import TopNav from './TopNav';
import HomeContainer from './HomeContainer';

class Home extends Component {
  render() {
    return (
      <div className="homepage">
        <Route path="/" component={() => <Hero />} exact />
        <Route path="/:slug" component={() => <TopNav />} exact />
        <HomeContainer {...this.props} />
      </div>
    );
  }
}

export default Home;
