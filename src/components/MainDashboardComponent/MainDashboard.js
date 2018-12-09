/* eslint-disable no-restricted-globals */
import React, { Component } from 'react';
import ResizeAware from 'react-resize-aware';
import SideNavigation from "../SideNavComponent/SideNav"
import styles from'./MainDashboard.module.scss';
import ItemTemplate from "../ItemComponent/ItemTemplate";
import classnames from "classnames";
import {Redirect} from 'react-router-dom';
let cx=classnames.bind(styles);

class MainDashboard extends Component{
constructor(){
    super();
    this.state={
      IsMobile:false,
      ItemDetailsModalOpen:false,
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

  componentDidMount(){
    this.setState({
      Items:["1","2","3","4"]
    })
  }

  AccessItemDetails(itemIndex){
    event.preventDefault();
    console.log(itemIndex);
    let showThisItemDetails=this.state.Items[itemIndex];
    this.props.history.push({
      pathname:"/Dashboard/NewItem",
      state:{
          itemPressed:showThisItemDetails,
          shouldOpen:true
       }
     });
  }

  render() {
   
    return (
      <ResizeAware
      onlyEvent
      onResize={this.handleResize}>
      {
      this.state.IsMobile===false?
        <div className={styles.parent_container_web}>

         <div className={styles.left_container_web}>

         <div className={styles.sidenav_container_web}>
              <SideNavigation></SideNavigation>
         </div>
         </div>
      
         <div className={styles.right_container_web}>

            <div className={styles.header_container_web}>

                <div className={styles.header_left_container_web}>
                    <span className={styles.font_h1}>Shpockingly</span>
                </div>

                <div className={styles.header_right_container_web}>
                    <span className={styles.font_h1}>Log Out</span>
                </div>
         
             
            </div>

            <div className={styles.main_container_web}>
              <div className={styles.searchBar_container_web}>
              <input className={[styles.special_input]}type="text"  placeholder="Search Something..." />
              </div>

            <div className={styles.cards_list}>
                        {this.state.Items.map((item,index) =>
                            <div onClick={()=>this.AccessItemDetails(index)}>
                                <ItemTemplate key={item} value={item}/>
                            </div>
                        )};
                    </div>
             
            
            </div>
            
            </div>
        </div>
        
     :
        <div className="App">
        <header className="App_header">
        
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <p>Hello here. Want to see the hot reload for mobileee </p>
          <a
            className="App_link"
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
