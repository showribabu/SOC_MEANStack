import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// forms module...


import { FormsModule } from '@angular/forms';


import {HttpClientModule} from '@angular/common/http';


//Activity 24... Cookie service...

import { CookieService } from 'ngx-cookie-service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowriComponent } from './showri/showri.component';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowriComponent,
    TestComponent,
    AboutUsComponent,
    ContactusComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ..............................................
    FormsModule,
    HttpClientModule
    
    //...............................................

   
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
