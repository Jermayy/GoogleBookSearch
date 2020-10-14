import React, { Component } from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { ResultList } from '../components/ResultList/ResultList';
import API from '../utils/API';

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
    <ResultList/>
    </div>
)}

}