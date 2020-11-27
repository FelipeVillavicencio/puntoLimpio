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
  signupView: boolean = false

  constructor(private authService:AuthService, public router: Router, public alerta: AlertController) { 
   
    
  }

  toggleSignUpView () {
    this.signupView = !this.signupView
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
    if(this.email=="admin@admin.com"){
    this.authService.login(this.email,this.password).then(res=>{
      this.router.navigate(['principal'])
    }).catch(err => this.presentAlert());
    } else{
      this.authService.login(this.email,this.password).then(res=>{
        this.router.navigate(['principaluser'])
      }).catch(err => this.presentAlert());
    }
  }

}
