import { Component } from '@angular/core';
import { LoginModel } from '../login-model';
import { AuthenticationService } from '../authentication.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginmodel =new LoginModel("","");

  constructor(private _authService:AuthenticationService, private cookie:CookieService,private router:Router){}


  response:any;
  onLogin()
  {
    // console.log(this.loginmodel);
    this._authService.login(this.loginmodel).subscribe(
      (data)=>{
        this.response=data;
        //WE have the login data..weather fail or success....

        // Login successfully!!
        if(this.response.message=='Login successfully!!')
        {
          //if the user login successfully ,we can store the username ...
          this.cookie.set('username',this.loginmodel.username);
          this.router.navigate(['/dashboard']);



        }


      }
    )
  }

}
