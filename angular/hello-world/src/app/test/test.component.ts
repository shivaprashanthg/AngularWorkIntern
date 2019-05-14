import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
<h2>
      Welcome {{name}}  
    </h2>
  
  <h2>{{2+2}}</h2>
  <input [id] = "myid" type = "text" value = "something">
  <input bind-disabled = "isdiabled" id = "{{myid}}" type = "text" value = "something">

  <h2 class = "text-success">code</h2>
  <h2 [class]="successclass">code</h2>
  <h2 class = "text-danger" [class]="successclass">code</h2>
  <h2 [class.text-danger] = "hasError">code</h2>
  <h2 [ngClass] = "messageClasses">code</h2>

  <h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color] = "highlightColor">Style Binding</h2>
    <h2 [ngStyle] = "titleStyles">Style Binding</h2>


    /*public myid  = "testid";
  public isdisabled = "false" ; */ 
  //public successclass = "text-success";// 
  //public hasError = "true";
  //public isSpecial = true;
  /*public highlightColor = "orange"
  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }
 /*public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial*/



    /* we are binding to the id property of input element - property binding*/  
  
  /*  `
    .text-success{
      color : green;
    }
    .text-danger{
      color : red;
    }
    .text-special{
      font-style: italic;*/
    //}
  //`]   /* name is static we want it to be dynamic*/
//})

#event binding
//<button (click) = "onClick($event)">Greet</button>#event biding
    
    //{{greeting}}
 //public greeting = "";
    
 onClick($event){
      console.log("welcome to code");
      this.greeting = "welcome to code";

      logMessage(value){
        console.log(value);

        <input #myInput type = "text">
    <button (click) = "logMessage(myinput.value)">Log</button>
    

    <input [(ngModel)] = "name" type = "text">
    {{name}}
    
    public  name = "";#two way binding
    <h2 *ngIf = "displayName">