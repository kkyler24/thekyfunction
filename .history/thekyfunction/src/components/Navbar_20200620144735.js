import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
    <nav className="navbar nav1  flex-row-reverse">
 <button className="navbar-toggler "  type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">Menu
//       <span id="icon" className="navbar-toggler-icon"><img id="iconImage" src="assets/menuCircle.png"/> </span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    </nav>
{/* //               
//    
//    
//      
//     <a class="navbar-brand" href="#">
//       <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
//       Ky
//     </a>
//   </nav> */}
           
        )
    }
}

export default Navbar
