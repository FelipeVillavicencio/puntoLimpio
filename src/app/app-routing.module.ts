import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./componentes/AdminHome/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'principaluser',
    loadChildren: () => import('./componentes/VoluntarioHome/principal-user.module').then( m => m.PrincipalUserPageModule)
  },
  {
    path: 'evento',
    loadChildren: () => import('./componentes/evento/evento.module').then( m => m.EventoPageModule)
  },
  {
    path: 'crudevento',
    loadChildren: () => import('./componentes/crudevento/crudevento.module').then( m => m.CRUDeventoPageModule)
  },
  {
    path: 'recursos',
    loadChildren: () => import('./componentes/recursos/recursos.module').then( m => m.RecursosPageModule)
  },
  {
    path: 'crudrecurso',
    loadChildren: () => import('./componentes/crudrecurso/crudrecurso.module').then( m => m.CrudrecursoPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
