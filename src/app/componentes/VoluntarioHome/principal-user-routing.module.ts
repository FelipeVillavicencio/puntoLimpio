import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrincipalUserPage } from './principal-user.page';

const routes: Routes = [
  {
    path: '',
    component: PrincipalUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrincipalUserPageRoutingModule {}
