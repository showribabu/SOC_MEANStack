import { HttpClient ,HttpParams} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignupModel } from './signup-model';
import { LoginModel } from './login-model';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
_registerapi='http://localhost:2000/userRegister'
_loginapi='http://localhost:2000/userLogin'

  constructor(private _http:HttpClient) { }
  register(signupmodel:SignupModel)
  {
    //creating a query...
    const params=new HttpParams()
    .set('username',signupmodel.username)
    .set('mail',signupmodel.mail)
    .set('password',signupmodel.password)
    .set('name',signupmodel.name);
      return this._http.get(this._registerapi,{params});
  }
  login(loginmodel:LoginModel)
  {
    const params=new HttpParams()
    .set('username',loginmodel.username)
    .set('password',loginmodel.password);
    return this._http.get(this._loginapi,{params});
  }

}
