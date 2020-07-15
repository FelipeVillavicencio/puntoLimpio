import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  
  public email: string;
  public password: string;
  public Cpassword: string;
  public Nombre:string;
  public Apellido:string;
  public myForm: FormGroup;

  constructor(private auth: AuthService, private router:Router ,public alerta: AlertController, public fb: FormBuilder) {
    this.myForm = this.fb.group({
      Nombre: ['', [Validators.required]] ,
      Apellido:['', [Validators.required]],
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required,Validators.minLength(6)]],
      Cpassword: ['', [Validators.required]],
    });
   }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Email inválido<p>La contraseña debe tener un mínimo de 6 caracteres',
      buttons: ['Volver'],
    });
    await alert.present();
    alert.present()
  }
  async IgualAlert() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Alerta',
      subHeader: '',
      message: 'Las contraseñas no son iguales',
      buttons: ['Volver'],
    });
    await alert.present();
    alert.present()
  }

  onSubmitRegistro(){
    if(this.password==this.Cpassword){
      this.auth.register(this.email,this.password,this.Nombre,this.Apellido).then(auth =>{
        this.router.navigate(['login'])
        
      }).catch(err =>  this.presentAlert())
  
    }else{
      this.IgualAlert()
    }

  }
}
