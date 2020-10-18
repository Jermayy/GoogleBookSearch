import React from "react";
import "./App.css";
import {Search} from "./pages/Search"
import {Saved} from "./pages/Saved"
import { HashRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
<Router>
<div className="App">
<Switch>
  
<Route exact path='/'>
<Search></Search>
</Route>

<Route exact path='/saved'>
<Saved></Saved>
</Route>


<Route>
  <h1>404: Page did not load correctly</h1>
</Route>


  </Switch> 

     
  
    </div>
  
  
    </Router> 
  
  );
}


export default App;
