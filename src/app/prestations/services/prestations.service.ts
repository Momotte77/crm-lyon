import { Injectable } from '@angular/core';
import { Prestation } from '../../shared/models/presatation-model';
import { FAKE_COLLECTION } from './fakeCollection';
import { State } from '../../shared/enum/state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationsService {
  private _collection: Prestation[];

  constructor() {
    this.collection = FAKE_COLLECTION;
  }

  // get Collection
  get collection(): Prestation[] {
    return this._collection;
  }

  // set Collection
  set collection(col: Prestation[]) {
    this._collection = col;
  }

  // get presta by id

  // update presta
  update(presta: Prestation, state?: State): void {
    const prestaToUpdate = {...presta};
    presta.state = state;
    // appel api
  }

  // delete presta

  // add presta
}
