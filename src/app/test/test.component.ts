import { Component } from '@angular/core';

@Component({
  selector: 'app-test',

  template: 
  
  `
  
  
    <h1>Inline Template & CSS & Test component</h1>

    <div>

      <h2>Interpolation of a variable!!!</h2>
      <hr>
      <hr>
      <h2 [class]="colorClass">{{Name}}</h2>

      <p>Data from the controller - interpolation</p>
    </div>


  <!--  calling to the method-->
    <button (click)="method1()" id="but1" >Click to call!!</button>

    <br>
    <button (click)="onSet()" id="but2" >Set</button>

    <button (click)="onReset()" id="but2" >Reset</button>

    <!-- template variable access -->

    <br>

    <br>
    <br>
    <input  #abc type="text" placeholder="Enter Name:">

    <br>
    <button (click)="Set(abc.value)" id="but3" >Set</button>
    <br>

    <!--ngIF condition and ngSwitch -->

    <img src="../assets/Logo.png" alt=""  *ngIf="details; else elseBlock" >

    <ng-template #elseBlock>
    <p>Image hidden</p>
    </ng-template>

    <br>

    <button (click)="showImage()" id="but2" >showImage</button>

    <button (click)="hideImage()" id="but2" >hideImage</button>

    
    <br>
    <br>
    
    <!--ngSwitch -->



    <div [ngSwitch]="numbers">

  
      <div *ngSwitchCase="'1'">

      one
      <p>case1</p>

      </div>
      
      <div *ngSwitchCase="'2'">
      two
      <p>case2</p>
      
      </div>

      <div *ngSwitchDefault>

      Showri
      <p>Default case</p>

      </div>
    
    
    </div>









  `
  ,


  styles: [


    `
  h1{
    text-align:center;
    color:green;
    text-shadow:1px 2px 2px black;
  }
  
    div 
    {
      background-color:green;
      color:white;
      text-align:center;
      align-items:center;

    }

    .sucess{
      color:yellow;
    }
    .failure 
    {
      color:blue;
    }
    
    #but1 {
    margin-left:680px;
    margin-top:80px;
    }

    #but2{
      margin-top:20px;
      padding:10px;
      background-color:red;
      color:white;
      margin-left:500px;
    }

    #but3{
      margin-top:20px;
      padding:10px;
      background-color:black;
      color:white;
      margin-left:500px;
    }

    input
    {
      text-align:center;
      align-items:center;
      margin-left:500px;
    }

    
    
    `
  ]
})
export class TestComponent {

Name='showri';

colorClass="sucess";

details=false;

numbers='56';


method1()
{
  console.log('Showribabu');
}

onSet()
{

    this.Name='Guntur';
    this.colorClass='failure';

}
onReset()
{

  this.Name='Kits';
  this.colorClass='sucess';
}

Set(abc:any)
{
  this.Name=abc;
}

hideImage()
{

  this.details=false;
  
  
}
showImage()
{
  this.details=true;
}


}
