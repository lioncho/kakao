import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { KakaoCordovaSDK, AuthTypes } from 'kakao-sdk/ngx';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _kakaoSDK: KakaoCordovaSDK,private router: Router) {
    
   }

   kokaoToken:any;


   login(){
     let loginOptions = {};
     loginOptions['authTypes'] = [

      AuthTypes.AuthTypeTalk,
      AuthTypes.AuthTypeStory,
      AuthTypes.AuthTypeAccount

                                  ];
      
    this._kakaoSDK.login(loginOptions).then((res) => {
 
    
    this._kakaoSDK.getAccessToken().then(res => {
      this.kokaoToken = res;
    })

    localStorage.setItem('kakoaToken:', this.kokaoToken );
      this.router.navigate(['/home'])
    });     
   }



   isLoggedIn(){
     
    var userToken =  localStorage.getItem("kakoaToken").toString();
    if(userToken){
      this.router.navigate(['/home']);
    }else{
      this.router.navigate(['login']);
    }
   }

}
