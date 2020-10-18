import React from 'react';
import "./Navbar.css";
import {Link} from 'react-router-dom';
export const Navbar = () =>{


return(

<div className="navbar-menu" id="navbar">
  <div className="navbar-start">
    <Link className="navbar-item" to="/" id="homeLink"> Book Search </Link>
  </div>

  <div className="navbar-end">
  <Link className="navbar-item" to="/Saved"> Saved Books </Link>
  </div>

</div>


)

}
