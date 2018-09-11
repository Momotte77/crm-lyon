import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule, PrestationsRoutingModule, SharedModule
  ],
  declarations: [ListPrestationComponent, PrestationComponent]
})
export class PrestationsModule { }
