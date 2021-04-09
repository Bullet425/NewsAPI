import { Injectable } from '@angular/core';
import { environment } from './../../environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiURL
  constructor(private http: HttpClient) { }

  getPosts(){
    
    return this.http.get(this.baseUrl)
  }
}
