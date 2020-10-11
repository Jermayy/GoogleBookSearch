import React from 'react';
import "./Navbar.css";

export const Navbar = () =>{


return(

<div className="navbar-menu" id="navbar">
  <div className="navbar-start">
    <a className="navbar-item" href="#" id="homeLink"> Book Search </a>
  </div>

  <div className="navbar-end">
  <a className="navbar-item" href="#"> Saved Books </a>
  </div>

</div>


)

}
