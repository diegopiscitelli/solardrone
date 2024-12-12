import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  updateDoc,
  where,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Incidents, IncidentsForm } from '../types/interfaces';

const PATH = 'incidents';

@Injectable({
  providedIn: 'root',
})
export class IncidentsService {
  private _firestore = inject(Firestore);

  private _collection = collection(this._firestore, PATH);

  getIncidents() {
    return collectionData(this._collection, { idField: 'id' }) as Observable<
      Incidents[]
    >;
  }

  // async getContact(id: string) {
  //   try {
  //     const snapshot = await getDoc(this.document(id));
  //     return snapshot.data() as Contact;
  //   } catch (error) {
  //     //catch error
  //     return undefined;
  //   }
  // }

  // async searchContactByQuery(name: string) {
  //   const q = query(
  //     this._collection,
  //     where('fullName', '>=', name),
  //     where('fullName', '<=', name + '\uf8ff'),
  //   );
  //   const querySnapshot = await getDocs(q);
  //   let contacts: Contact[] = [];
  //   querySnapshot.forEach((doc) => {
  //     contacts = [...contacts, { id: doc.id, ...doc.data() } as Contact];
  //   });
  //   return contacts;
  // }

  // createContact(user: userForm) {
  //   return addDoc(this._collection, user);
  // }

  // updateContact(id: string, contact: ContactForm) {
  //   return updateDoc(this.document(id), { ...contact });
  // }

  // deleteContact(id: string) {
  //   return deleteDoc(this.document(id));
  // }

  // private document(id: string) {
  //   return doc(this._firestore, `${PATH}/${id}`);
  // }
}
