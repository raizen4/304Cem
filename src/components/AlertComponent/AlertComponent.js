import React, { Component } from 'react';
import {Button, Alert} from 'react-bootstrap'
const AlertComponent=(props)=>{
        
    return(
        <Alert bsStyle="danger" >
          <h4 style={{fontSize:"3vh"}}>{props.Title}</h4>
          <p style={{fontSize:"2vh"}}>
              {props.Message}
          </p>
          <p>
            <Button hidden={props.PositiveButtonHidden} onClick={()=>props.HandlePositive()} bsSize="lg" bsStyle="success">{props.PositiveButtonMessage}</Button>
            <Button hidden={props.NegativeButtonHidden} onClick={()=>props.HandleNegative()} bsSize="lg" bsStyle="danger">{props.NegativeButtonMessage}</Button>
          </p>
          </Alert>
    )
}
export default AlertComponent