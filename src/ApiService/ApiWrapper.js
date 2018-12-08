import axios from 'axios';
import {RegisterRequest, LoginRequest} from '../ApiServiceModels/Models'

export default class ApiWrapper{
    constructor(){

    } 
  async Log_in(email,pass)
    {
        const request=new LoginRequest();
        request.Email=email;
        request.Password=pass;
        const url='http://localhost:4000/ApiGateway/users/login'
        try{
            const response=await axios.post(
                url,
                request,
            )
            if(response!==null){
                return response;
            }
            else{
                return null;
            }
        }catch(err){
            return null;
        }
    }
    
    async Register(displayname,email,pass){
        const request=new RegisterRequest();
        request.DisplayName=displayname;
        request.Email=email;
        request.Password=pass;
        const url='http://localhost:4000/ApiGateway/users/register'
        try{
            const response=await axios.post(
                url,
                request,
            )
            if(response!==null){
                return response;
            }
            else{
                return null;
            }
        }catch(err){
            return null;
        }
    }
    async  GetAllPosts()
    {
    
    }
    
     async  GetSavedPostsForLoggedUser()
    {}
    async  AcceptOffer(postId,offerId){
    
    }

}
