import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CRUDeventoPage } from './crudevento.page';

const routes: Routes = [
  {
    path: '',
    component: CRUDeventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CRUDeventoPageRoutingModule {}
