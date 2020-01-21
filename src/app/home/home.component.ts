import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  clickCounter : number = 0;
  name : string = "enter here";
  constructor() { 
    console.log('inside constructor');
  }

  ngOnInit() {
    console.log('inside oninit');
    console.log(this.name);
  }

  countOnClick(){
    this.clickCounter++;
  }

}
