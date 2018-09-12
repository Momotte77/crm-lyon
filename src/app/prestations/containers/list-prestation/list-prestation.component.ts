import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from '../../../shared/models/presatation-model';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit {
  public collection: Prestation[];
  public headers: string[];
  boutonAddPresta = {libelle: 'Ajouter prestation', route: '/prestations/add'};

  constructor(private prestationsService: PrestationsService) {}

  ngOnInit() {
    this.collection = this.prestationsService.collection;
    this.headers = [
      'Type',
      'Client',
      'Nombre jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'Action'
    ];

  }
}
