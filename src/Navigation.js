import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="nav-main">
            <h1>CorkBoard</h1>
            <h2>Simple Planning</h2>
        </div>
        <ul>
            <li>About</li>
            <li>Code</li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
