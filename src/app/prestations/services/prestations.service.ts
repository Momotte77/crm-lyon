import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/presatation-model';
import { FAKE_COLLECTION } from './fakeCollection';
import { State } from '../../shared/enum/state.enum';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private prestationCollection: AngularFirestoreCollection<Prestation>;

  private _collection: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  constructor(private afs: AngularFirestore) {
    // this.collection = FAKE_COLLECTION;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection = this.itemsCollection.valueChanges().pipe(
      map(data => {
        const tab = [];
        data.forEach(res => {
          tab.push(new Prestation(res));
        });
        return tab;
      })
    );
  }

  // get Collection
  get collection(): Observable<Prestation[]> {
    return this._collection;
  }

  // set Collection
  set collection(col: Observable<Prestation[]>) {
    this._collection = col;
  }

  // get presta by id

  // update presta
  update(presta: Prestation, state?: State): void {
    const prestaToUpdate = { ...presta };
    presta.state = state;
    // appel api
  }

  // delete presta

  // add presta
  add(presta: Prestation): void {
    // this.collection.push(presta);
  }
}
