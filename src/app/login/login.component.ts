import { Component } from '@angular/core';
import { LoginModel } from '../login-model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginmodel =new LoginModel("","");

  constructor(private _authService:AuthenticationService){}


  response:any;
  onLogin()
  {
    // console.log(this.loginmodel);
    this._authService.login(this.loginmodel).subscribe(
      (data)=>{
        this.response=data;
      }
    )
  }

}
