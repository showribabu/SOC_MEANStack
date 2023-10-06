import { Component } from '@angular/core';
import { SignupModel } from '../signup-model';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {


  // data from the form will be come....

  signupmodel =new SignupModel("", "", "","");


  onSignup()
  {
    console.log(this.signupmodel);
  }
}
