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
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private auth: Auth) {}
  private _firestore = inject(Firestore);
  private _userCollection = collection(this._firestore, 'users');
  public currentUser: any = {};

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

  getUsers() {
    return collectionData(this._userCollection, {
      idField: 'id',
    }) as Observable<User[]>;
  }

  login({ email, password }: any) {
    return signInWithEmailAndPassword(this.auth, email, password).then(
      // set currentUser
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
