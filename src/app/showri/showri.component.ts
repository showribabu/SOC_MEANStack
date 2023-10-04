import { Component } from '@angular/core';

// @Component({
//   selector: 'app-showri',
//   templateUrl: './showri.component.html',
//   styleUrls: ['./showri.component.css']
// })


@Component({
  selector: 'app-showri',
  template: 
  `

  
  
  <h2>Activity -5</h2>
  
  <div>
  <h3>I am from test file</h3>

  <h5>Created the inline  template and inline css and test component</h5>
  
  </div>


  <h4>Name from the controller</h4>
  <h4>Combines the CSS classes</h4>

  <p [class]="colorClass">{{name}}</p>
  
    <button  (click)="kitscse()">CLick Me!!</button>

    <h2>Activity-7</h2>
    <p [class]="colorClass">{{Text}}</p>

    <button (click)="onSet()" style="background-color:red;color:white;font-size:30px;padding:10px;margin:10px;margin-left:120px;">Set</button>

    <button (click)="onReset()" style="background-color:red;color:white;font-size:30px;padding:10px;margin:10px;">Reset</button>



    <h2>Activity-8</h2>
    <p [class]="colorClass">{{Raju}}</p>

    <input #abc type="text" placeholder="Enter name:">
    <button (click)="okSet(abc.value)" style="background-color:red;color:white;font-size:30px;padding:10px;margin:10px;margin-left:120px;">Set</button>

    <h2>Activity-9</h2>

    <img src="../assets/Logo.png"   *ngIf="display; else elseBlock" alt="">


    <button (click)="imageHide()" style="background-color:red;color:white;font-size:30px;padding:10px;margin:10px;margin-left:120px;">HIDE</button>
    <button (click)="imageShow()" style="background-color:red;color:white;font-size:30px;padding:10px;margin:10px;margin-left:120px;">SHOW</button>

    <ng-template #elseBlock>
    <p>Image is hidden</p>
    </ng-template>



    <h2>activity-10</h2>

    <div [ngSwitch]="cricketer">
    
      <div *ngSwitchCase="'virat'">
      
      viratKohli

      </div>
      <div *ngSwitchCase="'rohiot'">
      rohit

      </div>
      <div *ngSwitchDefault>
      Ms dhoni

      </div>
    
    </div>
  `
  ,
  styles: [

    
    `
    h2{
      color:red;
      align-items:center;
      text-align:center;
      font-size:30px;


    }

    div{
      background-color:red;
      border-radius:12px;
      background-color:Blue;
      color:white;
      text-align:center;
    
    }

    p{
      text-align:center;
      color:Green;
      font-size:30px;
    }
    h4
    {
      text-align:center;
      
    }


    /* This is for the css class binding... */
    .success{
      color:blue;
    }
    .failure{
      color:green;
    }

    `
  ]
})



export class ShowriComponent {


  cricketer="virat";

  display=false;

name='Showri';
Text="Kits";
colorClass="failure";
Raju="hii";
// method ...from the controller..

kitscse()
{
  console.log('Hello!!Method called');
}


onSet()
{
  this.Text="Kits";
  this.colorClass="success";

}
onReset()
{

  
  this.Text="Guntur";
  this.colorClass='failure';
}


okSet(abc:any)
{
  this.Raju=abc;
  this.colorClass="success";
}
imageHide()
{
  this.display=false;


}
imageShow()
{
  this.display=true;

}


}
