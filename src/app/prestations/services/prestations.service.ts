import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/presatation-model';
import { FAKE_COLLECTION } from './fakeCollection';
import { State } from '../../shared/enum/state.enum';

import {
  AngularFirestore,
  AngularFirestoreCollection
} from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private prestationCollection: AngularFirestoreCollection<Prestation>;

  private _collection$: Observable<Prestation[]>;
  private itemsCollection: AngularFirestoreCollection<Prestation>;

  public message$: Subject<string> = new Subject;

  constructor(private afs: AngularFirestore, private http: HttpClient) {
    // this.collection = FAKE_COLLECTION;
    this.itemsCollection = afs.collection<Prestation>('prestations');
    this.collection$ = this.itemsCollection.valueChanges().pipe(
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
  get collection$(): Observable<Prestation[]> {
    return this._collection$;
  }

  // set Collection
  set collection$(col: Observable<Prestation[]>) {
    this._collection$ = col;
  }

  // get presta by id

  // update presta
  // update(presta: Prestation, state?: State): void {
  //  const prestaToUpdate = { ...presta };
  //  presta.state = state;
  //  // appel api
  // }

  // delete presta

  // add presta
  // add(presta: Prestation): void {
  //  // this.collection.push(presta);
  // }

  addPrestation(item: Prestation): Promise<any> {
    const id = this.afs.createId();
    const prestation = { id, ...item };
    return this.itemsCollection
      .doc(id)
      .set(prestation)
      .catch(e => {
        console.log(e);
      });
      // return this.http.post('urlapi/prestation',item);
  }

  updatePrestation(item: Prestation, option?: State): Promise<any> {
    const presta = { ...item };
    if (option) {
      presta.state = option;
    }
    return this.itemsCollection
      .doc(item.id)
      .update(presta)
      .catch(e => {
        console.log(e);
      });
  }

  deletePrestation(presta: Prestation): Promise<any> {
    return this.itemsCollection
      .doc(presta.id)
      .delete()
      .catch(e => {
        console.log(e);
      });
  }

  getPrestation(id: string): Observable<Prestation> {
    return this.itemsCollection.doc<Prestation>(id).valueChanges();
    // return this.http.get(`urlapi/prestation/${id}`);
  }
}
