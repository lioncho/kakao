import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _kakaoSDK: KakaoCordovaSDK,private router: Router) {

//The access token will verify is the user has loggedin.
//This checks if the token is present in the localstorage
//Note: While implementing the logout, the token must be removed from the local storage too.
  this.userToken = localStorage.getItem("kakoaToken");
    if(this.userToken){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
    }
    
   }

   kokaoToken:any;
   userToken:any;
//Login method with the KakaoSDK
   login(){
     let loginOptions = {};
     loginOptions['authTypes'] = [

      AuthTypes.AuthTypeTalk,
      AuthTypes.AuthTypeStory,
      AuthTypes.AuthTypeAccount

                                  ];
      
    this._kakaoSDK.login(loginOptions).then((res) => {
 
    //Accessign the token and storing it to the localstorage
    this._kakaoSDK.getAccessToken().then(res => {
      this.kokaoToken = res;
    })

    localStorage.setItem('kakoaToken:', this.kokaoToken );
      this.router.navigate(['/home'])
    });     
   }


   ///Method to check if the user is logged in or not.
   isLoggedIn(){
     
    this.userToken = localStorage.getItem("kakoaToken");
    if(this.userToken){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
    }
   }

}
