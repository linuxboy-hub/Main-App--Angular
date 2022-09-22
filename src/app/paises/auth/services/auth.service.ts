import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth';
import { tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _auth: Auth | undefined;
  // get auth(): Auth {
  //   // return JSON.parse localStorage.getItem('user')
  //   return { ...this._auth! };
  // }
  constructor(private http: HttpClient) {}
  login() {
    return this.http.get<Auth>(`${environment.baseUrl}/usuarios/1`).pipe(
      tap((resp) => (this._auth = resp)),
      tap((resp) => {
        localStorage.setItem('user', JSON.stringify(resp));
        localStorage.setItem('id', resp.id);
      })
    );
  }
  logout() {
    this._auth = undefined;
    localStorage.removeItem('user');
  }

  verifyAuth(): Observable<boolean> {
    if (localStorage.getItem('user')) {
      return of(true);
    }
    return of(false);
  }
}
