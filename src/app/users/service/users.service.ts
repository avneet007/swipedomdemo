import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  getUsersList(){
      
    return this.httpClient.get(
      `https://api.github.com/search/users?q=eric`);

  }
}
