import { Component, OnInit, Input } from '@angular/core';
import { Prestation } from '../../../shared/models/presatation-model';
import { State } from '../../../shared/enum/state.enum';
import { PrestationsService } from '../../services/prestations.service';

@Component({
  selector: 'app-prestation',
  templateUrl: './prestation.component.html',
  styleUrls: ['./prestation.component.scss']
})
export class PrestationComponent implements OnInit {
  @Input()
  presta: Prestation;
  states = Object.values(State);

  constructor(private prestationService: PrestationsService) {}

  ngOnInit() {}

  update(e): void {
    // console.log(e.target.value);
    const state = e.target.value;
    this.presta.state = state; // TODO : supprimer apres fait code update bdd
    this.prestationService.updatePrestation(this.presta, state);
  }
}
