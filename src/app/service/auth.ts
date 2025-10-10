import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../../enviroments/enviroments';
import { UserResponse } from '../types/UserResponse';
import { LocalStorageService } from './local-storage.service';
import { Router } from '@angular/router';
import parseJwt from '../utils/parseJwt';
//import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  apiUrl: string = environment.apiUrl;

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService,
    private router: Router,
    //private toastr: ToastrService
  ) {}

  signIn(login: string, senha: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/auth/login`, { login, senha }).pipe(
      tap((res) => {
        this.saveUserInSession(res);
      })
    );
  }

  private saveUserInSession(user: UserResponse) {
    localStorage.setItem('currentUser', JSON.stringify(user));
  }

  getUserDetail2 = (): UserResponse => {
    // const userString = localStorage.getItem('currentUser');
    const userString = this.localStorageService.getItem('currentUser');

    if (userString) {
      try {
        const userObject = JSON.parse(userString); // Converte para objeto

        const user: UserResponse = {
          login: userObject.login,
          nome: userObject.nome,
          token: userObject.token,
        };
        return user;
      } catch (error) {
        console.error('Erro ao converter JSON:', error);
      }
    } else {
      console.log('Nenhum usuário encontrado no localStorage.');
    }

    if (userString) {
      //   console.log('userString: '+ userString );
      //   const dadosDetails: any = JSON.parse(userString);
      //   console.log('dadosDetails: '+ dadosDetails );
      // const user: UserResponse2 = {
      //   username: userObject.username,
      //   name: dadosDetails.userDetails.name,
      //   token: dadosDetails.userDetails.token,
      // };
      //   return user;
    }
    return {
      login: '',
      nome: '',
      token: '',
    };
  };

  public getToken = (): string | undefined => {
    const userDetails = this.getUserDetail2();

    return userDetails?.token;
  };

  public isLoggedIn = (): boolean => {
    const token = this.getToken();

    if (!token) {

      return false;
    }
    return this.isTokenExpired();
  };

  private isTokenExpired() {
    const token = this.getToken();

    if (!token) return true;

    const decoded = parseJwt(token);
    const isTokenExpired = Date.now() >= (decoded['exp'] as number) * 1000;
    if (isTokenExpired) {
      console.log('sessão expirada');
      // this.toastr.clear();
      // this.toastr.warning('sessão expirada');
      this.signOut();
    }
    return !isTokenExpired;
  }

  signOut() {
    //localStorage.clear();
    this.localStorageService.removeItem('currentUser');
    this.router.navigate(['/signin']);
  }

  public getNome = (): string | undefined => {
    const userDetails = this.getUserDetail2();

    return userDetails?.nome;
  };


}
