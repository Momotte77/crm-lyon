import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { PrestationsRoutingModule } from './prestations-routing.module';
import { PrestationComponent } from './components/prestation/prestation.component';
import { SharedModule } from '../shared/shared.module';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { UpdatePrestationComponent } from './containers/update-prestation/update-prestation.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormReactiveComponent } from './components/form-reactive/form-reactive.component';

@NgModule({
  imports: [
    CommonModule, PrestationsRoutingModule, SharedModule, FormsModule, ReactiveFormsModule
  ],
  declarations: [ListPrestationComponent, PrestationComponent,
    AddPrestationComponent, UpdatePrestationComponent, FormComponent, FormReactiveComponent]
})
export class PrestationsModule { }
