import { Prestation } from '../../shared/models/presatation-model';

export const FAKE_COLLECTION = [
  new Prestation({
    id: 'F1',
    typePresta: 'formation',
    client: 'Modis',
    nbJours: 2,
    tjmHT: 20
  }),
  new Prestation({
    id: 'P1',
    typePresta: 'Prestation',
    client: 'Arkesys',
    nbJours: 5,
    tjmHT: 700
  })
];
