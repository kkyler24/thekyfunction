import React, { Component } from "react";
import MenuCircle from "./assest.."

export class Navbar extends Component {
  render() {
    return (
      <nav className="navbar nav1  flex-row-reverse">
        <button
          className="navbar-toggler "
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          Menu
          <br/>
          <span id="icon" className="navbar-toggler-icon">
            <img id="iconImage" src="assets/menuCircle.png" />
          </span>
        </button>
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav float-right">
            <li className="nav-item active">
              <a className="nav-link list-inline" href="#">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pricing
              </a>
            </li>
          </ul>
        </div>
        <a className="navbar-brand" href="#">
          <img
            src="/docs/4.0/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Ky
        </a>
      </nav>
    );
  }
}

export default Navbar;
