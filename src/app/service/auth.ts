import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../enviroments/enviroments';
import { UserResponse } from '../types/UserResponse';


@Injectable({
  providedIn: 'root'
})
export class Auth {
  apiUrl: string = environment.apiUrl;

  constructor(

    private httpClient: HttpClient,

    ) { }

    signIn(login: string, senha: string): Observable<any> {

    return this.httpClient
      .post<any>(`${this.apiUrl}/auth/login`, { login, senha }


      )
      .pipe(

        tap((res) => {

          this.saveUserInSession(res.userDetails);
        })
      );
  }

  private saveUserInSession(user: UserResponse) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }



}
