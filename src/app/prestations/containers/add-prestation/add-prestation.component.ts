import { Component, OnInit } from '@angular/core';
import { Prestation } from '../../../shared/models/presatation-model';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-prestation',
  templateUrl: './add-prestation.component.html',
  styleUrls: ['./add-prestation.component.scss']
})
export class AddPrestationComponent implements OnInit {
  constructor(private prestationService: PrestationsService, private router: Router) {}

  ngOnInit() {}

  add(presta: Prestation): void {
    console.log(presta);
    this.prestationService.addPrestation(presta).then(() => {
      this.router.navigate(['/prestations']);
    });

  }
}
