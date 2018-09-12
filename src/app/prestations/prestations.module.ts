import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { UpdatePrestationComponent } from './containers/update-prestation/update-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, PrestationsRoutingModule, SharedModule, FormsModule
  ],
  declarations: [ListPrestationComponent, PrestationComponent, AddPrestationComponent, UpdatePrestationComponent, FormComponent]
})
export class PrestationsModule { }
