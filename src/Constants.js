
const Permissions={
    PERMISSION_GUEST:"Guest",
    PERMISSION_USER:"User",
    PERMISSION_ADMIN:"Admin",
}

class CurrentLoggedUser{
   constructor(){
       this.loggedUser=false;
       this.Username='Guest';
       this.Email='';
       this.DisplayName='Guest';
       this.Token='Guest';
       this.Permission=Permissions.PERMISSION_GUEST;

   }
}

export default {CurrentLoggedUser,Permissions}