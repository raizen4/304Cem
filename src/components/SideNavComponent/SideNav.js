import React, { Component } from 'react';
import  styles from './SideNav.module.scss';
import Image from 'react-bootstrap/lib/Image'
import classnames from "classnames";
let cx=classnames.bind(styles);

class SideNavigation extends Component{
render(){
  
    return(
        <div className={styles.parent_container}>
             <div className={styles.upper_container}>
                
                <div className={styles.upper_above_container}>
                    <div className={styles.upper_above_left_container}>
                    <Image src={require('../../images/userDefault.png')} responsive={true} circle width="80%" height="100%" />
                    </div>
                    <div className={styles.upper_above_right_container}>
                    <span className={styles.responsive_span}>Welcome</span>
                    </div>
                                
                </div>

                <div className={styles.upper_below_container}>
                 <div className={styles.upper_below_left_container}>
                    <span className={cx(styles.special_span,styles.responsive_span )}>Bogdan</span>
                    <span className={cx(styles.responsive_span )}>Bogdan@yahoo.com</span>
                 </div>                    
               </div>

               
            </div>
                <div className={styles.lower_container}>
                 <ul style={{listStyle: "none"}} className={styles.flex_ul}>
                     <li><a href="#" className={styles.special_links}>My Listings</a></li>
                     <li><a  href="#"  className={styles.special_links}>Sell</a></li>
                     <li><a href="#" className={styles.special_links}>Messages</a></li>
                     <li><a href="#"  className={styles.special_links}>Offers</a></li>
                     <li><a href="#"  className={styles.special_links}>Accepted Offers</a></li>
                 </ul>
                </div>
        </div>
      

    )
    

}
   }

export default SideNavigation
