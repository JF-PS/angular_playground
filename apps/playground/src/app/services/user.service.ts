import { Injectable } from '@angular/core';
import { catchError, from, map, Observable, of } from 'rxjs';
import firebase from 'firebase/compat';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import UserCredential = firebase.auth.UserCredential;
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { switchMap, take } from 'rxjs';
import { ProfileData } from '../model';

@Injectable({
  providedIn: 'root',
})
class UserService {
  user$: Observable<firebase.User | null> = this.auth.user;
  profile$: Observable<ProfileData | undefined> = this.user$.pipe(
    switchMap((user) =>
      this.afs.doc<ProfileData>(`user/${user?.uid}`).valueChanges()
    )
  );

  constructor(
    private readonly auth: AngularFireAuth,
    private readonly afs: AngularFirestore,
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

  addUser(): Observable<void> {
    return this.user$.pipe(
      switchMap((user) => {
        return from(
          this.afs.collection<ProfileData>(`user`).doc(user?.uid).set({
            login: '',
            playStyle: 'competitive',
            description: 'Lorem ipsum ...',
            age: '10',
          })
        );
      }),
      take(1)
    );
  }

  signup(email: string, password: string): Observable<boolean> {
    return from(this.auth.createUserWithEmailAndPassword(email, password)).pipe(
      map((res: UserCredential) => {
        if (res.user) this.addUser().subscribe();
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

  getUsers(): Observable<ProfileData[]> {
    return this.user$.pipe(
      switchMap(() => {
        const users = this.afs.collection<ProfileData>(`user`).valueChanges();
        return users;
      })
    );
  }

  getCurrentUser(): Observable<ProfileData | undefined> {
    return this.user$.pipe(
      switchMap((user) => {
        const currentUser = this.afs
          .doc<ProfileData>(`user/${user?.uid}`)
          .valueChanges();
        return currentUser;
      })
    );
  }

  updateProfile(data: ProfileData): Observable<void> {
    return this.user$.pipe(
      switchMap((user) => {
        return this.afs
          .doc<ProfileData>(`user/${user?.uid}`)
          .update({ ...data });
      })
    );
  }
}

export default UserService;
