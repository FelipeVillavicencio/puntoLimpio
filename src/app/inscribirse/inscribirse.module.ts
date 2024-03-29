import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InscribirsePageRoutingModule } from './inscribirse-routing.module';

import { InscribirsePage } from './inscribirse.page';
import { ListaComponent } from './lista/lista.component';
import { HeaderVolverComponent } from '../header-volver/header-volver.component';
import { BuscarPipe } from '../componentes/pipes/buscar.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InscribirsePageRoutingModule
  ],
  declarations: [InscribirsePage, ListaComponent, HeaderVolverComponent, BuscarPipe]
})
export class InscribirsePageModule {}
