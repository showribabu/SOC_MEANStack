import { Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  template: 
  
  `
  
  <div  class="ngFor">
    <h1>ngFor</h1>

    <div *ngFor="let i of cricketers"  >

    <ul>
   
   
     <li>{{i}}</li>

    </ul>
  
    </div>
  </div>
  
  `
  ,
  styles: [

`
.ngFor{
  text-align: center;
  align-items: center;
  background-color:green;
  color:white;


}

 ul li{

  text-decoration:none;
  list-style:none;
  

}




`

  ]
})
export class AboutUsComponent {


  cricketers=['Ms dhoni','Virat','Rohit'];
}
