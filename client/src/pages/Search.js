import React from 'react';
import { Navbar } from '../components/Navbar/Navbar';
import { Header } from '../components/Header/Header';
import { Searchbar } from '../components/Searchbar/Searchbar';
import { ResultList } from '../components/ResultList/ResultList';


export const Search =()=> {

return(
    <div>
    <Navbar/>
    <Header/>
    <Searchbar/>
    <ResultList/>
    </div>
)

}