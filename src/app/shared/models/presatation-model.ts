import { PrestationInterface } from '../interface/prestation-interface';
import { State } from '../enum/state.enum';

export class Prestation implements PrestationInterface {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number;
  tauxTva: 20;
  tjmHT: number;
  state = State.EN_ATTENTE;

  constructor(fields?: Partial<Prestation>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  totalHT(): number {
    console.log('totalHT called');
    if (!this.tjmHT || !this.nbJours) {
      return 0;
    }
    return this.tjmHT * this.nbJours;
  }

  totalTTC(tva?: number): number {
    console.log('totalTTC called');
    if (!this.tauxTva) {
      this.tauxTva = 20;
    }
    const totalHT = this.totalHT();

    if (!tva) {
      tva = this.tauxTva;
    } else if (tva < 0) {
      tva = 0;
    }
    return totalHT + (tva * totalHT) / 100;
  }
}
