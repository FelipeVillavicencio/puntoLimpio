import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import Swal from 'sweetalert2';
import { SweetSService } from './servicios/sweet-s.service';
@Injectable({
  providedIn: 'root'
})
export class AlertasService {

  constructor(public alertaInput: AlertController,
              private alertaSweet: SweetSService) { }
 
  async presentAlertPrompt() {
    const alert = await this.alertaInput.create({
      cssClass: 'my-custom-class',
      header: 'Prompt!',
      inputs: [
        {
          name: 'nombre',
          type: 'text',
          placeholder: 'Placeholder 1'
        },
        {
          name: 'tipo',
          type: 'text',
          min: 5,
          max: 10
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'Confirmar',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

}
