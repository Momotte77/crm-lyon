import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/presatation-model';
import { State } from '../../../shared/enum/state.enum';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input()
  presta: Prestation;
  public messageDelete: string;
  states = Object.values(State);

  constructor(
    private prestationService: PrestationsService,
    private router: Router
  ) {}

  ngOnInit() {}

  update(e): void {
    // console.log(e.target.value);
    const state = e.target.value;
    this.presta.state = state; // TODO : supprimer apres fait code update bdd
    this.prestationService.updatePrestation(this.presta, state).then(presta => {
      this.presta = presta;
    });
  }

  delete(): void {
    this.prestationService.deletePrestation(this.presta).then(data => {
      this.prestationService.message$.next('ha bah Bravo!!!');
    });
  }

  updatePresta(): void {
    this.router.navigate(['/prestations/update']);
  }
}
