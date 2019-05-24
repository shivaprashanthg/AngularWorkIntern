import { Component, OnInit,Input, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>{{name}}</h2>
    <h2>{{name | uppercase}}</h2>
    <h2>{{person | json}}</h2>
    <h2>{{date | date : 'short'}}</h2>
    <h2>{{date | date : 'shortDate'}}</h2>
    <h2>{{date | date : 'shortTime'}}</h2>
    <button (click)= "fireEvent()">SendEvent</button>

    <h2 [style.color] = "hasError ? 'red' : 'green'">Style Binding</h2>
    <h2 [style.color] = "highlightColor">Style Binding</h2>
    <h2 [ngStyle] = "titleStyles">Style Binding</h2>
  `,
  
  styles:[`
  .text-success{
    color : green;
  }
  .text-danger{
    color : red;
  }
  .text-special{
    font-style: italic;*/
  }
`]  


  
})  
  
export class TestComponent implements OnInit{
    
  //@Input('parentData') public name ;
  //@Output() public childEvent = new EventEmitter();
  public name  = "code";
  public message = "welcome to code";
  public date = new Date();
  public person = {
    "firstname" : "",
    "lastname"  : "",
  }
  constructor() { }

  ngOnInit() {
  }
  //fireEvent(){
   // this.childEvent.emit('hello world');
  //}

}


/*public name = "code";
  //displayName = true;
  //public greeting = "";
  //public  name = "";
  //public successclass = "text-success";// 
  //public hasError = "true";
  //public isSpecial = true;
  /*public highlightColor = "orange"
  public titleStyles = {
    color : "blue",
    fontStyle : "italic"
  }
  public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
  
  
    
  

    
      

