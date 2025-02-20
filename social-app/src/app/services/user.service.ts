import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

export interface UserData {
  users: User[],
  total: number
}

@Injectable({
  providedIn: 'root'
})

export class UserService {

  private apiUrl = "http://localhost:3000"

  constructor(private http: HttpClient) { }

  get() : Observable<UserData> {
    return this.http.get<UserData>(this.apiUrl + '/user')
  }

  search(query: string, page: number, limit: number) : Observable<UserData> {
    let url = `${this.apiUrl}/user?query=${query}&page=${page}&limit=${limit}`;
    return this.http.get<UserData>(url);
  }

  getSingUser(username: string) : Observable<User> {
    let url = `${this.apiUrl}/user/${username}`
    return this.http.get<User>(url)
  }
}
