import React   from 'react';
import  styles from "./ItemTemplate.module.scss";
import Image from 'react-bootstrap/lib/Image'
import classnames from "classnames";
let cx=classnames.bind(styles);
const ItemTemplate=(props)=>{   
     return(
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
                <button className={cx(styles.btn, styles.btn__block,styles.card__btn)}>Button</button>
              </div>
            </div>
          </div>
         )
    }
    export default ItemTemplate;
