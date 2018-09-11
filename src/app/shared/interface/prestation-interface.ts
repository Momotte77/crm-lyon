import { State } from '../enum/state.enum';

export interface PrestationInterface {
  id: string;
  typePresta: string;
  client: string;
  nbJours: number;
  tauxTva: number;
  tjmHT: number;
  state: State;
}
