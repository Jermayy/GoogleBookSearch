import React, { useRef } from 'react';
import './Searchbar.css';
export const Searchbar = (props) => {

const searchRef = useRef();


const handleSubmit=(event)=>{
event.preventDefault();
props.onClick(searchRef.current.value);
}

    
    return (
        <div className="card" id="searchBoxContainer">
  <div className="card-content">
<p className="title">Search</p>

    <form className="searchBarBox" >
        <input className="input is-rounded is-info" type="text" placeholder="Search Books..." id="searchBar"  ref={searchRef}/>
        <button className="button is-warning" type="submit" id="searchButton" onClick={handleSubmit} >Search</button>
           </form>
          
  </div>
  {/* temporary button to log book State  */}
  <button onClick={props.Log}>Test</button>
</div>
    )
}