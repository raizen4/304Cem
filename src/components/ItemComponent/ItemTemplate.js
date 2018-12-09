import React   from 'react';
import  styles from "./ItemTemplate.module.scss";
import Image from 'react-bootstrap/lib/Image'
import classnames from "classnames";
let cx=classnames.bind(styles);
const ItemTemplate=(props)=>{   
     return(
            <div onClick={props.click} className={styles.cards__item}>
            <div className={styles.card}>
              <div className={cx(styles.card__image)}>
                <Image src={require("../../images/test_photo.jpg")}></Image>
              
              </div>
              <div className={styles.card__header}>
                <div className={styles.header__up}>
                    <div   className={styles.card__title}>{props.value.Title}</div>
                    <div className={styles.card__title}>Condition: <span>{props.value.Condition}</span></div>
                    
                </div>
               
                <div className={styles.header__down}>
                <span  className={styles.card__title}>{props.value.Location}</span>
                </div>
                  
                    
                   
                </div>
              <div className={styles.card__content}>
               
                <p className={styles.card__text}>{props.value.Description}</p>
                <div className={styles.card_meta}>
                  <div>Posted on: <span>{props.value.DateCreated}</span></div>
               
              
                </div>
              </div>
            </div>
          </div>
         )
    }
    export default ItemTemplate;
