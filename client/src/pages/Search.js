import React, { Component } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { ResultList } from '../components/ResultList/ResultList';
import API from '../utils/API';
import { ResultListItem } from '../components/ListItem/ResultListItem';

export class Search extends Component{

state = {
 
 books:[]
};

 

// Called when user clicks submit, queries remote API and saves result to state
handleInputChange =value=>{
console.log(value.replace(' ', '+').trim());
API.fetchBooks(value.replace(' ', '+').trim()).then(res =>
    this.setState({books: res.data.items})
   )
.catch(
    () =>
      this.setState({
        books: [],
        message: "No results"
      })
  );
};

 // test button to console log book state array
consoleLog = e =>{
    e.preventDefault();
    console.log(this.state.books);
}




render(){
return(
    <div>
    <Navbar/>
    <Header/>
    <Searchbar onClick={this.handleInputChange} Log={this.consoleLog} />
    
    {this.state.books.length ?  
    (
        <ResultList>     
            {this.state.books.map(book =>(
                <ResultListItem
                key = {book.id}
                image = {book.volumeInfo.imageLinks.thumbnail}
                link = {book.volumeInfo.canonicalVolumeLink}
                title = {book.volumeInfo.title}
                author = {book.volumeInfo.authors[0]}
                description = {book.volumeInfo.description}
                />
    ))}
        </ResultList>) :  
    ( 

<h2>Search a book!</h2>)
    }
   
    </div>
)}

}