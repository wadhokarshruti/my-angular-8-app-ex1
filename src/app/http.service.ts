import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  availableBreweries(){
    return this.http.get("http://192.168.0.106:8081/allProviders");
  }
}
