import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Prestation } from '../../../shared/models/presatation-model';

@Component({
  selector: 'app-update-prestation',
  templateUrl: './update-prestation.component.html',
  styleUrls: ['./update-prestation.component.scss']
})
export class UpdatePrestationComponent implements OnInit {
  public presta: Prestation;
  // prestation$: Observable<Prestation>;

  constructor(
    private prestationService: PrestationsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe(presta => {
      console.log(presta);
      this.presta = presta.prestation;
      // this.presta.typePresta = presta.typePresta;
      // this.presta.client = presta.client;
      // this.presta.nbJours = presta.nbJours;
      // this.presta.tjmHT = presta.tjmHT;
      // this.presta.tauxTva = presta.tauxTva;
      // this.presta.state = presta.state;
    });
    //    const id2 = this.route.snapshot.paramMap.get('id');
    //  console.log('ngOnInit update-presta-comp');
    // console.log(id2);
    //    if (id2) {
    //    this.prestation$ = this.prestationService.getPrestation(id2);
    //  this.item = this.prestation$.subscribe();
    // }
     // console.log(this.presta);
  }

  update(presta: Prestation): void {
    this.prestationService.updatePrestation(presta).then(() => {
      this.router.navigate(['/prestations']);
    });
  }
}
