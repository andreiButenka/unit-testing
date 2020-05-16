import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private httpClient: HttpClient) { }

  public getUsers(): Observable<any> {
    return this.httpClient.get<any>(
      `https://reqres.in/api/users?page=1`,
    );
  }

  public getSingleUser(id: string): Observable<any> {
    return this.httpClient.get<any>(
      `https://reqres.in/api/users/${id}`,
    );
  }
}
