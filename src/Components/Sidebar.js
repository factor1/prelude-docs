import React, { Component } from 'react';
import {
  NavLink
} from 'react-router-dom';
import '../Styles/Sidebar.css';

class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar">
        <nav>
          <ul>
            {this.props.pages.map((page) =>
              <li key={page.doc.order}>
                <NavLink to={page.doc.slug} activeStyle={{
                  fontWeight: 'bold',
                  color: 'red'
                }}>
                  {page.doc.title}
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Sidebar;
