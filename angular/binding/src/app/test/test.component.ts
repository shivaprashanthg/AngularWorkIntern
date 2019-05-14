import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <h2>
       welcome {{name}}
    </h2>

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
    
  public name = "code";
  displayName = true;
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
 /*public messageClasses = {
    "text-success" : !this.hasError,
    "text-danger" : this.hasError,
    "text-special" : this.isSpecial*/
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  onstructor() { }
  constructor() { }
  
  ngOnInit() {
  }

  
}
  
    
  

    
      

