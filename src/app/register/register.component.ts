import { Component } from '@angular/core';
import { SignupModel } from '../signup-model';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  // data from the form will be come....

  signupmodel =new SignupModel("", "", "","");

//constructor...
constructor(private _authservice:AuthenticationService){}



response:any;
  
  onSignup()
  {
    // console.log(this.signupmodel);
    this._authservice.register(this.signupmodel).subscribe(

    (data)=>{
      this.response=data;
    }
    )}
}
