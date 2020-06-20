import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
        
                <nav class="navbar nav1  flex-row-reverse">
    <button class="navbar-toggler "  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Menu<br>
      <span id="icon" class="navbar-toggler-icon"><img id="iconImage" src="assets/menuCircle.png"> </span>
    </button>
    <div class="collapse navbar-collapse " id="navbarNav">
      <ul class="navbar-nav float-right">
        <li class="nav-item active">
          <a class="nav-link list-inline" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
    </div>
    <a class="navbar-brand" href="#">
      <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
      Ky
    </a>
  </nav>
            </div>
        )
    }
}

export default Navbar
