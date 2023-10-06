import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// forms module...



import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowriComponent } from './showri/showri.component';
import { TestComponent } from './test/test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactusComponent } from './contactus/contactus.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowriComponent,
    TestComponent,
    AboutUsComponent,
    ContactusComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ..............................................
    FormsModule
    //...............................................
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
