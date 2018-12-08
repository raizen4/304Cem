import React, { Component } from 'react';
import './Login.css';
import ResizeAware from 'react-resize-aware';
import {Button} from 'react-bootstrap'
import ApiWrapper from '../../ApiService/ApiWrapper'
import AlertComponent from '../AlertComponent/AlertComponent'

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
    
    let alertAuth;
    let alertRequestError;
    if (this.state.Errors.AuthError) {
      alertAuth=<AlertComponent 
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
    this.state.IsMobile===false?
        
     
       this.state.LoginLayoutActive ?

      <div className="parent-container">
        <div className="auth-container">
        <div className="error-container">
      {alertAuth}
      </div>
          <span className="span-login">Login </span>
          <input className="auth-input" placeholder="Email here"></input>
          <input className="auth-input" type="password" placeholder="Password here"></input>
          
          <Button bsStyle="primary" 
          style={{marginBottom:"0%",marginTop:"2%"}}
           onClick={()=>this.SignInUser()} 
           bsSize="large" 
           block>
           Let me in
          </Button>
     
           <Button bsStyle="primary" 
            style={{marginBottom:"0%",marginTop:"1%"}}
            onClick={()=>this.ShowRegisterPage()}
            bsSize="large"
             block>
             Sign Up
            </Button>
            
           <Button bsStyle="info" 
            style={{marginBottom:"0%",marginTop:"15%"}}
            onClick={()=>this.NavigateToDashboard()}
            bsSize="large"
             block>
             Continue as Guest
            </Button>
          </div>
        </div>
      :
       <div className="parent-container">
        <div className="auth-container">
            <div>{alertAuth}</div>
            <div>{alertRequestError}</div>
            <span className="span-login">Register </span>
            <span placeholder="DisplayName"></span>
            <input placeholder="Email"></input>
            <input placeholder="Password"></input>
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
              Register me!
            </Button>
          </div>
       </div>
       
    :
      <div className="parent-container">
         
         
         </div>
       
      }
</ResizeAware>
    );
  }
}

export default Login;
