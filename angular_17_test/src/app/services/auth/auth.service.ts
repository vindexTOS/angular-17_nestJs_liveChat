import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../env';
import { userTypes } from '../../../Types/UserTypes';
import { Store } from '@ngrx/store';
import { getUserdata } from '../../Store/Auth/Auth-Store';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.apiUrl;
  constructor(private http: HttpClient, private store: Store) {}
  setToken(token: string) {
    return localStorage.setItem('token', token);
  }

  getDecodedUserInfo(): Object | null {
    const userData = localStorage.getItem('token');
    if (userData) {
      const userInfo: any = JSON.stringify(userData);
      console.log(userInfo);
      this.store.dispatch(getUserdata({ userData: userInfo }));
    }
    return null;
  }
  createUser(user: userTypes) {
    console.log(user);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post(
      `${this.baseUrl}user/register`,
      { ...user },
      { headers }
    );
  }

  logInUser(user: userTypes) {
    return this.http.post(`${this.baseUrl}user/signin`, { ...user });
  }
}
