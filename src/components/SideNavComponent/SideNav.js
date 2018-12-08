import React, { Component } from 'react';
import  './SideNav.css';
import Image from 'react-bootstrap/lib/Image'

class SideNavigation extends Component{
render(){
  
    return(
        <div className="parent-container-side-nav">
             <div className="upper-container-side-nav">
                
                <div className="upper-above-container-side-nav">
                    <div className="upper-above-left-container-side-nav">
                    <Image src={require('../../images/userDefault.png')} responsive='true' circle width="85%" height="100%" />
                    </div>
                    <div className="upper-above-right-container-side-nav">
                    <span className="responsive-side-nav">Welcome</span>
                    </div>
                                
                </div>

                <div className="upper-below-container-side-nav">
                 <div className="upper-below-left-container-side-nav">
                    <span className="responsive-side-nav special-span-side-nav">Bogdan</span>
                    <span className="responsive-side-nav">Bogdan@yahoo.com</span>
                 </div>
                 <div className="upper-below-right-container-side-nav">
                 <Image src={require('../../images/basket.png')}  responsive='true' width="50%" height="50%" />
                 </div>
                    
                </div>

               
            </div>
                <div className="lower-container-side-nav">
                 <ul style={{listStyle: "none"}} className="flex-ul">
                     <li><a href="#" style={{textDecoration:"none"}}>My Listings</a></li>
                     <li><a  href="#"  style={{textDecoration:"none"}}>Sell</a></li>
                     <li><a href="#"  style={{textDecoration:"none"}}>Messages</a></li>
                     <li><a href="#"  style={{textDecoration:"none"}}>Offers</a></li>
                     <li><a href="#"  style={{textDecoration:"none"}}>Accepted Offers</a></li>
                 </ul>
                </div>
        </div>
      

    )
    

}
   }

export default SideNavigation
