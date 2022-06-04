import PropTypes from "prop-types";
import React, { Component } from "react";
import './Navbar.scss'

export class Navbar extends Component {
  static propTypes = {};

  render() {
    return (
      <>
        <nav class="navbar navbar-expand-lg bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">
       <img src="https://img.icons8.com/nolan/48/warning-shield.png" width="30" class="logo" alt='logo' />
    </a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
        <a class="nav-link active" aria-current="page" href="/">Dashboard</a>
        <a class="nav-link" href="/">About</a>
        <a class="nav-link" href="/">
           <h5>NewsMonkey</h5>
        </a>
       
      </div>
    </div>
  </div>
</nav>
      </>
    );
  }
}

export default Navbar;
