import React, { Component } from 'react';
import '../Styles/HomeHero.css';

class Hero extends Component {
  render() {
    return (
      <div className="container container--justify-content-center home-hero">
        <div className="row">
          <div className="col-6">
            <h1>
              Prelude
            </h1>
            <h3>
              An open source WordPress starting theme point by <a href="https://factor1studios.com">factor1</a>.
            </h3>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
