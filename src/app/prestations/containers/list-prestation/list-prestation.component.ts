import { Component, OnInit, OnDestroy } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Prestation } from '../../../shared/models/presatation-model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-list-prestation',
  templateUrl: './list-prestation.component.html',
  styleUrls: ['./list-prestation.component.scss']
})
export class ListPrestationComponent implements OnInit, OnDestroy {
  // public collection: Prestation[];
  public collection$: Observable<Prestation[]>;
  // private sub: Subscription;
  public headers: string[];
  boutonAddPresta = {
    libelle: 'Ajouter prestation',
    route: '/prestations/add'
  };

  constructor(private prestationsService: PrestationsService) {}

  ngOnInit() {
    this.collection$ = this.prestationsService.collection$;
    // this.sub = this.prestationsService.collection.subscribe(data => {
    //  console.log(data);
    //  this.collection = data;
    // });
    this.headers = [
      'Type',
      'Client',
      'Nombre jours',
      'TJM HT',
      'Total HT',
      'Total TTC',
      'Etat',
      'Actions'
    ];
  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
}
