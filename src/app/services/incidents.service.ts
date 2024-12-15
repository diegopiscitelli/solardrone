import { Injectable, inject } from '@angular/core';
import {
  Firestore,
  addDoc,
  collection,
  collectionData,
  getDocs,
  query,
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

  async getIncidentByStatus(status: string) {
    let incidents: Incidents[] = [];
    const q = query(this._collection, where('state', '==', status));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      incidents = [...incidents, { id: doc.id, ...doc.data() } as Incidents];
    });
    return incidents;
  }

  createIncident(user: Incidents) {
    return addDoc(this._collection, user);
  }
}
