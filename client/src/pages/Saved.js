import React, { Component } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { SavedList } from '../components/SavedList/SavedList';
import SavedBooks from '../utils/test.js'
import { SavedListItem } from '../components/ListItem/SavedListItem';



export class Saved extends Component{


    state = {
        SavedBooks
    }
    
render(){
return (
<div>
<Navbar/>
<Header/>
<SavedList>
{this.state.SavedBooks.map (book =>(
            <SavedListItem 
            key = {book.id}
                image = {book.image}
                link = {book.link}
                title = {book.title}
                author = {book.author}
                description = {book.description}
            />  
        ))}
</SavedList>
</div>
)
}}