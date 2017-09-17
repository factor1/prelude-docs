import React, { Component } from 'react';
import '../Styles/HomeHero.css';

class Hero extends Component {

  render() {

    return (
      <div className="container container--justify-content-center home-hero">
        <div className="row row--align-items-end">
          <div className="col-6">
            <h1>
              Prelude
            </h1>
            <h3>
              An open source WordPress starting theme by <a href="https://factor1studios.com">factor1</a>.
            </h3>
          </div>
          <div className="col-6 text-right project-badges">
            <a className="github-button" href="https://github.com/factor1/prelude-wp" data-icon="octicon-star" data-show-count="true" aria-label="Star factor1/prelude-wp on GitHub">
              Star
            </a>
            <a className="github-button" href="https://github.com/factor1/prelude-wp/subscription" data-icon="octicon-eye" data-show-count="true" aria-label="Watch factor1/prelude-wp on GitHub">
              Watch
            </a>
            <a className="github-button" href="https://github.com/factor1/prelude-wp/issues" data-icon="octicon-issue-opened" data-show-count="true" aria-label="Issue factor1/prelude-wp on GitHub">
              Issue
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Hero;
