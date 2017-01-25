import React, { Component } from 'react';
import { Link } from 'react-router';

import Header from './header';

export default class App extends Component {

  // <nav className="navbar navbar-default navbar-fixed-top topnav" role="navigation">
  //   <div className="container topnav">
  //       <div className="navbar-header">
  //           <a className="navbar-brand topnav" href="/">benchmarking</a>
  //       </div>
  //           <ul className="nav navbar-nav navbar-right">
  //               <li><Link to="/form">form</Link></li>
  //               <li><Link to="/upload">upload</Link></li>
  //               <li><Link to="/logout">logout</Link></li>
  //           </ul>
  //   </div>
  // </nav>


  render() {
    return (
      <div>
        <Header/>

        {this.props.children}

      </div>
    );
  }
}
