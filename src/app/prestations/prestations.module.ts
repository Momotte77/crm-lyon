import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';

@NgModule({
  imports: [
    CommonModule, PrestationsRoutingModule
  ],
  declarations: [ListPrestationComponent]
})
export class PrestationsModule { }
