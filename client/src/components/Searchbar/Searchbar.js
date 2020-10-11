import React from 'react';
import './Searchbar.css';
export const Searchbar = () => {
    return (
        <div className="card">
  <div className="card-content">
<p className="title">Search</p>

    <container className="searchBarBox">
        <input put className="input is-rounded is-info" type="text" placeholder="Search Books..." id="searchBar"></input>
        <input className="button is-warning" type="submit" value="Search" id="searchButton"></input>
    </container>
  </div>
  
</div>
    )
}