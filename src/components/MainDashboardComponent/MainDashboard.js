import React, { Component } from 'react';
import ResizeAware from 'react-resize-aware';
import SideNavigation from "../SideNavComponent/SideNav"
import'./MainDashboard.css';
class MainDashboard extends Component{
constructor(){
    super();
    this.state={
      IsMobile:false,
      Items:[],
      Mobile:{
        DrawerOpen:false
      }
      
    }
  }
  handleResize = ({ width, height }) =>{
    if(width<100){
   
      this.setState({IsMobile:true})
    }
    else{
    
      this.setState({IsMobile:false})
    }
  
   
  };

  render() {
    
    return (
      <ResizeAware
      onlyEvent
      onResize={this.handleResize}>
      {
      this.state.IsMobile===false?
        <div className="parent-container-web">

         <div className="left-container-web">

         <div className="sidenav-container-web">
              <SideNavigation></SideNavigation>
         </div>
         </div>
      
         <div className="right-container-web">

            <div className="header-container-web">

                <div className="header-left-container-web">
                    <h1 className="font-dimension-h1">Shpockingly</h1>
                </div>

                <div className="header-right-container-web">
                    <h1 className="font-dimension-h3">Log Out</h1>
                </div>
         
             
            </div>

            <div className="main-container-web">
          
              <input className="special-input searchBar-container-web" type="text"  placeholder="Search Something..." />
            </div>
            
            </div>
        </div>
        
     :
        <div className="App">
        <header className="App-header">
        
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello here. Want to see the hot reload for mobileee </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
      }
</ResizeAware>
    );
  }
}
export default MainDashboard
