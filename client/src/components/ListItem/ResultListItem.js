import React from 'react';
import './ListItem.css';
import PlaceholderImg from '../../utils/images/placeimg_500_500_any.jpg';

export const ResultListItem =()=>{

    return(

        <div className="card" id="listItem">
        <div className="card-content">
       
       <span className="level">  
           <p className="level-item level-left"> Result List Item</p> 

        <div className="level-right">   
           <button className="button is-info level-item">View</button>
           <button className="button is-success level-item">Save</button>
        </div>
       </span>

        <span className="level">
        <img className="img level-item level-left" src={PlaceholderImg}/>
        <div className= " level-item level-right listText">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        </span>

        </div>
        </div>  
    )
    
}