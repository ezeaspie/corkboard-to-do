import React, { Component } from 'react';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <div className="nav-main">
          <div className="headers">
            <h1>CorkBoard</h1>
            <h2>Simple Planning</h2>
          </div> 
          <img src="./images/LogoNoShadow.png" alt="main-logo"/>
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
