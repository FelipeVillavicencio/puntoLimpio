import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudrecursoPage } from './crudrecurso.page';

const routes: Routes = [
  {
    path: '',
    component: CrudrecursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudrecursoPageRoutingModule {}
