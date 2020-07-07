import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';
import { AlertController } from '@ionic/angular';
import { from } from 'rxjs';
import { RecursosService } from './recursos.service';
@Injectable({
  providedIn: 'root'
})
export class SweetSService {

  constructor(public alert1: AlertController, 
              public recursosService: RecursosService) { }
 
}
