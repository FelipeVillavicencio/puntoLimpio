import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CRUDeventoPageRoutingModule } from './crudevento-routing.module';

import { CRUDeventoPage } from './crudevento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CRUDeventoPageRoutingModule
  ],
  declarations: [CRUDeventoPage]
})
export class CRUDeventoPageModule {}
