import { AuthService } from '../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private fb: FormBuilder, private kakaoAuth: AuthService) {

   }


  get password(){
    return this.loginForm.get('password');
  }
  get email(){
    return this.loginForm.get('email');
  }

  loginForm = this.fb.group({
    email:['',[Validators.required, Validators.email]],
    password: ['',[Validators.required,Validators.minLength(5)]]
  });



  login(){
    this.kakaoAuth.login();
    // this.kakaoAuth.loginTest();
  }



  ngOnInit() {

    this.kakaoAuth.isLoggedIn();

  }

}
