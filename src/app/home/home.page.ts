import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
titulo= "Punto Limpio";
  constructor(private menuCtrl: MenuController) {}


  abrirMenu(){
this.menuCtrl.toggle();
  }
}
