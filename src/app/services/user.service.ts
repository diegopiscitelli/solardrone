import { Injectable, inject } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from '@angular/fire/auth';
import {
  Firestore,
  addDoc,
  getDocs,
  collection,
  collectionData,
  query,
  where,
} from '@angular/fire/firestore';
import { User } from '../types/interfaces';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth) {
    this.authStatusListener();
  }
  private _firestore = inject(Firestore);
  private _userCollection = collection(this._firestore, 'users');
  public currentUser: any = {};

  private currentUserStatus: any = {};
  private authStatusSub = new BehaviorSubject(this.currentUserStatus);
  currentAuthStatus = this.authStatusSub.asObservable();

  // Listener to know if user is or not Logged In
  authStatusListener() {
    this.auth.onAuthStateChanged((credential) => {
      if (credential) {
        this.authStatusSub.next(credential);
        // User is logged in
      } else {
        this.authStatusSub.next(null);
        // User is logged out
      }
    });
  }

  async register({ email, password }: any) {
    const userResponse = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    // set new User to User database with "User" role
    let user = {
      id: userResponse.user.uid,
      name: userResponse.user.displayName
        ? userResponse.user.displayName
        : userResponse.user.email,
      role: 'user',
    };
    return await addDoc(this._userCollection, user);
  }

  async getUsers() {
    return (await getDocs(query(this._userCollection))).docs.map((robots) =>
      robots.data()
    );
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      // storage currentUser locally
      async (userResponse) => {
        const q = query(
          this._userCollection,
          where('id', '==', userResponse.user.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.currentUser = doc.data();
        });
      }
    );
  }

  loginWithGoogle() {
    return signInWithPopup(this.auth, new GoogleAuthProvider()).then(
      // storage currentUser locally
      async (userResponse) => {
        console.log(userResponse);
        const q = query(
          this._userCollection,
          where('id', '==', userResponse.user.uid)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          this.currentUser = doc.data();
        });
      }
    );
  }

  logout() {
    return signOut(this.auth);
  }
}
