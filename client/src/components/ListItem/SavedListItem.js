import React from 'react';
import './ListItem.css';
import PlaceholderImg from '../../utils/images/placeimg_500_500_any.jpg';

export const SavedListItem =({image,link,title,author,description})=>{

    return(

        <div className="card listItem" >
        <div className="card-content">
       
       <span className="level">  
           <h1 className="level-item level-left" > {title}</h1> 
           <p className="level-item level-left">Author: {author}</p>
        <div className="level-right">   
           <a href={link}><button className="button is-info level-item" >View</button></a>
           <button className="button is-danger level-item">Delete</button>
        </div>
       </span>

        <span className="level">
        <img className="img level-item level-left" src={image} alt="Book Thumbnail"/>
        <div className= " level-item level-right listText">
    
    <p>{description}</p>
        </div>
        </span>

        </div>
        </div>  
    )
    
}