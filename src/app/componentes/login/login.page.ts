import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {
  
  
  email:string;
  password:string;

  constructor(private authService:AuthService, public router: Router, public alerta: AlertController) { 
   
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }


  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Usuario o contraña Incorrecto',
      buttons: ['Volver'],
    });
    await alert.present();
    alert.present()
  }

  onSubmitLogin(){
    this.authService.login(this.email,this.password).then(res=>{
      this.router.navigate(['principal'])
    }).catch(err => this.presentAlert());
  }

}