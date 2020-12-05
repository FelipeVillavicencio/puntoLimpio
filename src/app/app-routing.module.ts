import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './componentes/menu/menu.component';

const routes: Routes = [
  {
    path: '',
    component: MenuComponent,
    children: [
      {
        path: '',
        redirectTo: 'inscribirse',
        pathMatch: 'full'
      },
    
      {
        path: 'principal',
        loadChildren: () => import('./componentes/AdminHome/principal.module').then( m => m.PrincipalPageModule)
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
        path: 'crudevento/:id',
        loadChildren: () => import('./componentes/crudevento/crudevento.module').then( m => m.CRUDeventoPageModule)
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
      {
        path: 'inscribirse',
        loadChildren: () => import('./inscribirse/inscribirse.module').then( m => m.InscribirsePageModule)
      },
      {
        path: 'perfiles',
        loadChildren: () => import('./perfiles/perfiles.module').then( m => m.PerfilesPageModule)
      }
    ]

  },
 {
 path: 'login',
 loadChildren: () => import('./componentes/login/login.module').then( m => m.LoginPageModule)
 },
 {
  path: 'home',
  loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
},
 {
 path: 'registro',
 loadChildren: () => import('./componentes/registro/registro.module').then( m => m.RegistroPageModule)
 },
  

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
