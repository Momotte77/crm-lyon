import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListPrestationComponent } from './containers/list-prestation/list-prestation.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { UpdatePrestationComponent } from './containers/update-prestation/update-prestation.component';
import { ResolverPrestationService } from './services/resolver-prestation.service';

const appRoutes: Routes = [
  { path: '', component: ListPrestationComponent },
  { path: 'add', component: AddPrestationComponent },
  {
    path: 'update/:id',
    component: UpdatePrestationComponent,
    resolve: { prestation: ResolverPrestationService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class PrestationsRoutingModule {}
