import React from 'react';
import './Searchbar.css';
export const Searchbar = () => {
    return (
        <div className="card">
  <div className="card-content">
<p className="title">Search</p>

    <container className="searchBar">
        <input put className="input is-rounded is-info" type="text" placeholder="Search Books..."></input>
        <input className="button is-warning" type="submit" value="Search"></input>
    </container>
  </div>
  
</div>
    )
}