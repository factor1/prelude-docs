import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';
import Sidebar from './Sidebar';
import '../Styles/HomeContainer.css';

class HomeContainer extends Component {

  constructor() {
    super();

    this.state = {
      docSlug: ''
    }
  }

  setSlug() {
    if( !this.props.match.params.slug ) {
      this.setState({
        docSlug: 'intro'
      }, this.getMarkdown);
    } else {
      this.setState({
        docSlug: this.props.match.params.slug
      }, this.getMarkdown);
    }
  }

  getMarkdown() {
    // error handling
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

  fetch(`https://raw.githubusercontent.com/factor1/prelude-wp/master/documentation/${this.state.docSlug}.md`)
  .then(checkStatus)
  .then(response => response.text())
  .then(doc => this.setState({markdown: doc})).catch(error => console.log(error));
  }

  componentWillMount() {
    this.setSlug();
  }

  componentWillReceiveProps(nextProps,nextState){
    console.log('updated');
    if( nextProps.match.params.slug ) {
      this.setState({docSlug: nextProps.match.params.slug}, this.getMarkdown)
    }
  }

  render() {
    return (
      <div className="container home-container">
        <div className="row">
          <div className="col-3">
            <Sidebar {...this.props} />
          </div>
          <div className="col-9">
            <ReactMarkdown source={this.state.markdown} />
          </div>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
