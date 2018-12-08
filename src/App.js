import React, { Component } from 'react';
import Login from "./components/LoginComponent/Login"
import {BrowserRouter, Redirect,Route, Switch} from 'react-router-dom';
import MainDashboard from "./components/MainDashboardComponent/MainDashboard"
class App extends Component {
render(){
  return(
    <BrowserRouter>
    <div>
      <Switch>
       
         <Route exact path="/" component={Login}/>
         <Route exact path="/Dashboard" component={MainDashboard}/>
         <Redirect to="/"></Redirect>
      </Switch>    
    </div>
    </BrowserRouter>
  )
}
}
export default App;
