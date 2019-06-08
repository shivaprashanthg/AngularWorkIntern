import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


export class WelcomeComponent implements OnInit {

  message = 'Some Welcome Message'
  name = ''
  
  constructor(private route:ActivatedRoute) { 

  }

  
  ngOnInit(){
    //COMPILATION ERROR this.message = 5
    console.log(this.message)
    // console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name'];
    
  }
}

export class Class1 {

}

export class Class2 {
  
}