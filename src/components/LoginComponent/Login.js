import React, { Component } from 'react';
import styles from './Login.module.scss';
import ResizeAware from 'react-resize-aware';
import {Button} from 'react-bootstrap'
import ApiWrapper from '../../ApiService/ApiWrapper'
import AlertComponent from '../AlertComponent/AlertComponent'
import AuthPopup from "../../Helpers/PopupGenerator";
class Login extends Component {

  constructor(){
    super();
    this.state={
      Api:new ApiWrapper(),
      LoginLayoutActive:true,
      RegisterLayoutActive:false,
      IsMobile:false,
      Errors:{
        AuthError:false,
        RequestErr:false,
      },
      LoginDetails:{
        Email:'',
        Password:'',
      },
      ReturnedUser:{
        Id:'',
        Email:'',
        DisplayName:'',
        Token:'',
        Permission:'',
      },
      RegisterDetails:{
        Email:'',
        DisplayName:'',
        Password:'',
      }
    }
  }

   componentDidMount(){
    
    
  }
  //#region PublicMethods
  handleResize = ({ width, height }) =>{
    if(width<960){
   
      this.setState({IsMobile:true})
    }
    else{
    
      this.setState({IsMobile:false})
    }
  
   
  };
ShowRegisterPage=()=>{
 this.setState({RegisterLayoutActive:true,  LoginLayoutActive:false, })
}

ShowLoginPage=()=>{
  this.setState({RegisterLayoutActive:false,  LoginLayoutActive:true, })
}

RegisterNewUser=async()=>{
 console.log("Tried to register")
 if(this.state.RegisterDetails.Email.length===0 || this.state.RegisterDetails.Password.length===0 || this.state.RegisterDetails.DisplayName.length===0){
  this.setState({Errors:{ AuthError:true}})
  }

  else{
    try{
      const facadeResponse= await this.state.Api.Register(this.state.RegisterDetails.DisplayName,this.state.RegisterDetails.Email,this.state.RegisterDetails.Password);
      if(facadeResponse!=null){
        this.setState({
          ReturnedUser:{
            Id:'worked',
            Email:'worked',
            DisplayName:'worked',
            Token:'worked',
            Permission:'worked',
          },
        })
      }
      else{
        AuthPopup();
      }
    }catch(err){
      this.setState({
        Errors:{
          RequestErr:true
        }
      })
    }
    
  }
}

 SignInUser=async()=>{
console.log("trying to sign in")
  if(this.state.LoginDetails.Email.length==0 || this.state.LoginDetails.Password.length==0){
  this.setState({Errors:{AuthError:true}})
  
  }
  else{
    try{
      const facadeResponse= await this.state.Api.Log_in(this.state.LoginDetails.Email,this.state.LoginDetails.Password);
      if(facadeResponse!=null){
        this.setState({
          ReturnedUser:{
            Id:'worked',
            Email:'worked',
            DisplayName:'worked',
            Token:'worked',
            Permission:'worked',
          },
        })
      }
      else{
          this.setState({
            Errors:{
              RequestErr:true
            }
          })
      }
    }catch(err){
      this.setState({
        Errors:{
          RequestErr:true
        }
      })
    }
  }
}

NavigateToDashboard=()=>{
  console.log("pressed")
  this.props.history.push(`/Dashboard`)
}
HandleDismissAuthErrorAlert=()=>{
  this.setState({
    Errors:{
      AuthError:false
    }
   });
}
HandleDismissRequestErrorAlert=()=>{
  this.setState({
    Errors:{
      RequestErr:false
    }
   });

}
  //#endregion

  
  
  
  render() {
    
    var alertAuth;
    var alertRequestError;
    if (this.state.Errors.AuthError) {
      alertAuth=<AlertComponent 
        shouldBeSeen={1000}
        Title={"Oh Snap, You got an error"}
        Message={"Please complete all the fields before submitting!"}
        PositiveButtonHidden={false}
        PositiveButtonMessage={"OK"}
        NegativeButtonHidden={true}
        HandlePositive={()=>this.HandleDismissAuthErrorAlert()}
        >
        </AlertComponent>
     
    }
    if(this.state.Errors.RequestErr){
      alertRequestError=
      <AlertComponent 
      Title={"Oh Snap,Something went wrong"}
      Message={"Something went wrong when we tried to get the information from our servers. Try again please"}
      PositiveButtonHidden={false}
      PositiveButtonMessage={"OK"}
      NegativeButtonHidden={true}
      HandlePositive={()=>this.HandleDismissRequestErrorAlert()}
      >

      </AlertComponent>
    }

    return (
      <ResizeAware
      onlyEvent
      onResize={this.handleResize}>  
     {
       this.state.LoginLayoutActive ?

      <div className={styles.parent_container}>
           <div className={styles.message_box}>
            {alertAuth}
           </div>
        <div className={styles.auth_container}>
    
          <span className={styles.span_login}>Login </span>
          <input className={styles.special_input} placeholder="Email here"></input>
          <input className={styles.special_input} type="password" placeholder="Password here"></input>
          
          <Button bsStyle="primary" 
          style={{marginBottom:"0%",marginTop:"2%"}}
           onClick={()=>this.SignInUser()} 
           bsSize="large" 
           block>
           <span className={styles.span_responsive}>Sign In</span>
          </Button>
     
           <Button bsStyle="primary" 
            style={{marginBottom:"0%",marginTop:"1%"}}
            onClick={()=>this.ShowRegisterPage()}
            bsSize="large"
             block>
              <span className={styles.span_responsive}>Sign Up!</span>
            </Button>
            
           <Button bsStyle="info" 
            style={{marginBottom:"0%",marginTop:"15%"}}
            onClick={()=>this.NavigateToDashboard()}
            bsSize="large"
             block>
             <span className={styles.span_responsive}>Continue as Guest</span>
            </Button>
          </div>
        </div>
      :
       <div className={styles.parent_container}>
         <div className={styles.message_box}>{alertAuth}</div>
            <div>{alertRequestError}</div>
        <div className={styles.auth_container}>
          
            <span className={styles.span_login }>Register</span>
            <span placeholder="DisplayName"></span>
            <input className={styles.special_input} placeholder="Email"></input>
            <input className={styles.special_input} placeholder="Password"></input>
            <Button bsStyle="primary" 
            style={{marginBottom:"0%",marginTop:"2%"}}
              bsSize="large"
              onClick={()=>this.ShowLoginPage()} 
              block>
              Back
            </Button>

            <Button 
              bsStyle="primary" 
              style={{marginBottom:"0%",marginTop:"1%"}}
              bsSize="large"
              onClick={()=>this.RegisterNewUser()} 
              block>
                 <span className={styles.span_responsive}>Register me!</span>
            </Button>
          </div>
       </div>
     }
   
</ResizeAware>
    );
  }
}

export default Login;
