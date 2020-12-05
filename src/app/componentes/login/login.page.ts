import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../servicios/auth.service";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  
})
export class LoginPage implements OnInit {
  
  
  emailL:string;
  passwordL:string;
  signupView: boolean = false;
//registrar
public email: string;
  public password: string;
  public Cpassword: string;
  public Nombre:string;
  public Apellido:string;
  public myForm: FormGroup;
  constructor(public router: Router, public alerta: AlertController,
    private auth: AuthService, public fb: FormBuilder) { 
      this.myForm = this.fb.group({
        Nombre: ['', [Validators.required]] ,
        Apellido:['', [Validators.required]],
        email: ['', [Validators.required,Validators.email]],
        password: ['', [Validators.required,Validators.minLength(6)]],
        Cpassword: ['', [Validators.required]],
      });
    
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
    this.auth.login(this.emailL,this.passwordL).then(res=>{
      this.router.navigate(['inscribirse'])
    }).catch(err => this.presentAlert());
    } else{
      this.auth.login(this.emailL,this.passwordL).then(res=>{
        this.router.navigate(['inscribirse'])
      }).catch(err => this.presentAlert());
    }
  }
  //registrar
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
