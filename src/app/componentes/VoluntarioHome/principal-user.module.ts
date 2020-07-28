import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrincipalUserPageRoutingModule } from './principal-user-routing.module';

import { PrincipalUserPage } from './principal-user.page';
import { HeaderComponent } from '../header/header.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrincipalUserPageRoutingModule
  ],
  declarations: [PrincipalUserPage,HeaderComponent]
})
export class PrincipalUserPageModule {}
