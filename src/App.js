import React, { Component } from 'react';
import Login from "./components/LoginComponent/Login"
import {BrowserRouter, Redirect,Route, Switch} from 'react-router-dom';
import MainDashboard from "./components/MainDashboardComponent/MainDashboard"
import ItemDetails from './components/ItemDetailsComponent/ItemDetails';
class App extends Component {
render(){
  return(
    <BrowserRouter>
    <div>          
         <Route exact path="/" component={Login}/>
         <Route   path="/Dashboard" component={MainDashboard}/>
         <Route  path="/Dashboard/NewItem" component={ItemDetails}/>
         <Redirect to="/"></Redirect> 
    </div>
    </BrowserRouter>
  )
}
}
export default App;
