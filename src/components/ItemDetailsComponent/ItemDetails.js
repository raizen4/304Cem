import Modal from 'react-responsive-modal';
import React, { Component } from 'react';
import styles from "./ItemDetails.module.scss"
import Image from 'react-bootstrap/lib/Image'
import {Button} from "react-bootstrap"
import classnames from "classnames";
let cx=classnames.bind(styles);
class ItemDetails extends React.Component {
    constructor() {
      super();
      
      this.state = {
        modalIsOpen: false
      };
   
      this.afterOpenModal = this.afterOpenModal.bind(this);
      this.onCloseModal = this.onCloseModal.bind(this);
    }
   
    afterOpenModal() {
      // references are now sync'd and can be accessed.
      this.subtitle.style.color = '#f00';
    }
    componentDidMount(){
        console.log("I have mounted");
        this.setState({modalIsOpen:this.props.location.state.shouldOpen})
    }
   
    onCloseModal() {
      this.setState({modalIsOpen: false});
      this.props.history.push({
        pathname:"/Dashboard",
  
       });
    }
   
    render() {
        return (
          <div>
            <Modal  closeOnOverlayClick={true} open={this.state.modalIsOpen} onClose={this.onCloseModal} center>
            <div className={styles.cards__item}>
            <div className={styles.card}>
              <div className={cx(styles.card__image)}>
                <Image src={require("../../images/test_photo.jpg")}></Image>
              </div>
              <div className={styles.card__header}>
                <div className={styles.header__up}>
                    <div   className={styles.card__title}>GTX 1070</div>
                    <div className={styles.card__title}>Condition: <span>A</span></div>
                    
                </div>
               
                <div className={styles.header__down}>
                <span  className={styles.card__title}>Bucharest</span>
                </div>
                  
                    
                   
                </div>
              <div className={styles.card__content}>
               
                <p className={styles.card__text}>This is the shorthand for flex-grow, flex-shrink and flex-basis combined. The second and third parameters (flex-shrink and flex-basis) are optional. Default is 0 1 auto. </p>
               
                <div className={styles.buttons_cotainer}> 
                  <Button   bsClass={cx(styles.btn, styles.btn__block,styles.button_item_details_style)}>Add to Fav</Button>
                  <Button    bsClass={cx(styles.btn, styles.btn__block,styles.button_item_details_style)}>Make Offer</Button>
                  <Button bsClass={cx(styles.btn, styles.btn__block,styles.button_item_details_style)}>Send  Message</Button>
               </div>
              </div>
            </div>
          </div>
            </Modal>
          </div>
        );
      }
  }
  export default ItemDetails