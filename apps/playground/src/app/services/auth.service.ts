import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of } from 'rxjs';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';
import { UserCloudService } from '.';

@Injectable({
  providedIn: 'root',
})
class AuthService {
  constructor(
    private readonly auth: AngularFireAuth,
    private readonly userCloud: UserCloudService,
    private readonly router: Router
  ) {}

  login(email: string, password: string): Observable<boolean> {
    return from(this.auth.signInWithEmailAndPassword(email, password)).pipe(
      map((res: UserCredential) => {
        return !!res.user;
      }),
      catchError(() => of(false))
    );
  }

  signup(email: string, password: string, login: string): Observable<boolean> {
    return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      map((res: UserCredential) => {
        if (res.user) this.userCloud.createUser(login).subscribe();
        return !!res.user;
      }),
      catchError(() => of(false))
    );
  }

  logout() {
    this.auth.signOut().then(() => {
      this.router.navigateByUrl('login');
    });
  }
}

export default AuthService;
