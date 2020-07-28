import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDeventoPageRoutingModule } from './crudevento-routing.module';

import { CRUDeventoPage } from './crudevento.page';
import { HeaderVolverComponent } from '../../header-volver/header-volver.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDeventoPageRoutingModule
  ],
  declarations: [CRUDeventoPage,HeaderVolverComponent]
})
export class CRUDeventoPageModule {}
