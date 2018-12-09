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
    let testItems=[];
    testItems.push(
      {
        _id:"asddfa3e4e34fd",
        AuthorId:"11122112112",
        AuthorName:"Bogdan",
        Title:"Gtx 1070",
        Condition:"A",
        Location:"Bucharest",
        Description:"This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.",
        DateCreated:"21.Jan.2019",
        Images:["https://goo.gl/images/nsSPRa","34433"],
        Offers:[
          {
            _id:"dsgqwt4534243e",
            BidderName:"Raluca",
            BidAmmount:150,
            BidderMessage:"this is a test message"
          }
        ]
      },
      {
        _id:"asddfa3e4c34fd",
        AuthorId:"343251554334",
        AuthorName:"Gogoasa",
        Title:"Gtx 1060",
        Condition:"B",
        Location:"Guatamala",
        Description:"This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.",
        DateCreated:"08.Jan.2020",
        Images:["../../images/test_photo.jpg","34433"],
        Offers:[
          {
            _id:"dsgqwt4534243e",
            BidderName:"Raluca",
            BidAmmount:150,
            BidderMessage:"this is a test message",
            Status:"Pending"
          },
          {
            _id:"dsgqwtd534243e",
            BidderName:"Gogu",
            BidAmmount:350,
            BidderMessage:"this is a test message",
            Status:"Pending"
          }
        ]
      },
      {
        _id:"fasde43q45cfd",
        AuthorId:"43124324321",
        AuthorName:"Relu",
        Title:"Gtx 1060",
        Condition:"B",
        Location:"France",
        Description:"This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto.",
        DateCreated:"21.Jan.2020",
        Images:["../../images/test_photo.jpg","34433"],
        Offers:[
          {
            _id:"dsgqwt4534243e",
            BidderName:"Raluca",
            BidAmmount:150,
            BidderMessage:"this is a test message",
            Status:"Pending"
          },
          {
            _id:"dsgqwtd534243e",
            BidderName:"Gogu",
            BidAmmount:350,
            BidderMessage:"this is a test message",
            Status:"Pending"
          }
        ]
      },
      
    )
    this.setState({
      Items:testItems
    })
  }

  AccessItemDetails(itemIndex){
    event.preventDefault();
    console.log(itemIndex);
    let showThisItemDetails=this.state.Items[itemIndex];
    this.props.history.push({
      pathname:"/Dashboard/"+showThisItemDetails._id,
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
                                <ItemTemplate click={()=>this.AccessItemDetails(index)} key={item._id} value={item}></ItemTemplate>
                           
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
