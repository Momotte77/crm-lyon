import { Component, OnInit } from '@angular/core';
import { PrestationsService } from '../../services/prestations.service';
import { Router } from '@angular/router';
import { Prestation } from '../../../shared/models/presatation-model';

@Component({
  selector: 'app-update-prestation',
  templateUrl: './update-prestation.component.html',
  styleUrls: ['./update-prestation.component.scss']
})
export class UpdatePrestationComponent implements OnInit {
  item = new Prestation();
  constructor(private prestationService: PrestationsService, private router: Router) { }

  ngOnInit() {
  }

  update(presta: Prestation): void {
    console.log(presta);
    this.prestationService.update(presta);
    this.router.navigate(['/prestations']);
  }

}
