import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudrecursoPageRoutingModule } from './crudrecurso-routing.module';

import { CrudrecursoPage } from './crudrecurso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudrecursoPageRoutingModule
  ],
  declarations: [CrudrecursoPage]
})
export class CrudrecursoPageModule {}
