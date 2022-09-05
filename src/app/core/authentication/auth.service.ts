import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, map, Observable, shareReplay, tap } from 'rxjs';
import { User } from '../interfaces/user';

const AUTH_DATA = 'user-login';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private subject = new BehaviorSubject<User | null>(null);
  user$: Observable<User | null> = this.subject.asObservable();

  isLoggedIn$: Observable<boolean>;
  isLoggedOut$: Observable<boolean>;

  constructor(private http: HttpClient, private router: Router) {
    this.isLoggedIn$ = this.user$.pipe(map((user) => !!user));
    this.isLoggedOut$ = this.isLoggedIn$.pipe(map((loggedIn) => !loggedIn));
    const user = localStorage.getItem(AUTH_DATA);
    if (user) {
      this.subject.next(JSON.parse(user));
    }
  }

  login(credentials: User): Observable<any> {
    return this.http
      .post<any>('http://localhost:4000/login/authlogin', {
        username: credentials.username,
        password: credentials.password,
      })
      .pipe(
        tap((user) => {
          console.log(user);
          this.subject.next(user);
          localStorage.setItem(AUTH_DATA, JSON.stringify(user));
        }),
        shareReplay()
      );
  }

  logout() {
    this.subject.next(null);
    localStorage.removeItem(AUTH_DATA);
    this.router.navigateByUrl('/login');
  }
}
