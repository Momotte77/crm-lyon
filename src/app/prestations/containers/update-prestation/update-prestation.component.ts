import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Prestation } from '../../../shared/models/presatation-model';
import { Observable } from 'rxjs';
import { ResolverPrestationService } from '../../services/resolver-prestation.service';

@Component({
  selector: 'app-update-prestation',
  templateUrl: './update-prestation.component.html',
  styleUrls: ['./update-prestation.component.scss']
})
export class UpdatePrestationComponent implements OnInit {
  item = new Prestation();
  prestation$: Observable<Prestation>;

  constructor(
    private prestationService: PrestationsService,
    private router: Router,
    private route: ActivatedRoute,
    private resolverPrestationService: ResolverPrestationService
  ) {}

  ngOnInit() {
    this.resolverPrestationService
      .resolve(this.route.snapshot)
      .subscribe(presta => {
        this.item.client = presta.client;
        this.item.typePresta = presta.typePresta;
        this.item.tjmHT = presta.tjmHT;
        this.item.tauxTva = presta.tauxTva;
        this.item.nbJours = presta.nbJours;
        this.item.state = presta.state;
      });
    //    const id2 = this.route.snapshot.paramMap.get('id');
    //  console.log('ngOnInit update-presta-comp');
    // console.log(id2);
    //    if (id2) {
    //    this.prestation$ = this.prestationService.getPrestation(id2);
    //  this.item = this.prestation$.subscribe();
    // }
  }

  update(presta: Prestation): void {
    console.log(presta);
    this.prestationService.updatePrestation(presta).then(() => {
      this.router.navigate(['/prestations']);
    });
  }
}
