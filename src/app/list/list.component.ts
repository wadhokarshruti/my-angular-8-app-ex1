import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  providers: Object;

  constructor(private _http:HttpService) { }

  ngOnInit() {
    this._http.availableBreweries().subscribe(data => {
      this.providers = data;
      console.log(this.providers);
    });
  }

}
