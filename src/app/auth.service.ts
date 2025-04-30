import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  // Register user
  register(email: string, password: string): Observable<any> {
    return from(this.afAuth.createUserWithEmailAndPassword(email, password));
  }

  // Login user
  login(email: string, password: string): Observable<any> {
    return from(this.afAuth.signInWithEmailAndPassword(email, password));
  }

  // Logout user
  logout(): Observable<void> {
    return from(this.afAuth.signOut());
  }

  // Get current user (optional)
  getCurrentUser(): Observable<any> {
    return this.afAuth.authState;
  }

  // Wrapper for register to match RegisterPage
  registerUser(email: string, password: string): Observable<any> {
    return this.register(email, password);
  }

  // Wrapper for login to match LoginPage
  loginUser(email: string, password: string): Observable<any> {
    return this.login(email, password);
  }
}
