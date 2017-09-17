import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import '../Styles/TopNav.css';

class TopNav extends Component {

  render() {

    return (
      <div className="container container--justify-content-center top-nav">
        <div className="row row--align-items-center">
          <div className="col-6">
            <h1>
              <Link to="/">
                Prelude - <small>An open source WordPress starting theme by <a href="https://factor1studios.com">factor1</a></small>.
              </Link>
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default TopNav;
