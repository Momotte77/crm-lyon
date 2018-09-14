import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Prestation } from '../../shared/models/presatation-model';
import { PrestationsService } from './prestations.service';

@Injectable({
  providedIn: 'root'
})
export class ResolverPrestationService implements Resolve<Prestation> {
  constructor(
    private prestationService: PrestationsService,
    private router: Router
  ) {}

  resolve(
    route: ActivatedRouteSnapshot
  ): Observable<Prestation> {
    const id = route.paramMap.get('id');

    return this.prestationService.getPrestation(id).pipe(
      take(1),
      map(presta => {
        if (presta) {
          return presta;
        } else {
          // id not found
          this.router.navigate(['/prestations']);
          return null;
        }
      })
    );
  }
}
