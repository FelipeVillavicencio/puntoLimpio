import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {
admin = false;
usuario ;
verContenido= false;
rutas = [];
email ;
inscripciones = {};
id ;
private rutasAdmin = [
  {
    routerlink : '/principal',
    icon : 'home-outline',
    titulo : 'Inicio'
  },
  {
    routerlink : '/crudevento',
    icon : 'barbell-outline',
    titulo : 'Crear eventos'
  },
  {
    routerlink : '/crudrecurso',
    icon : 'flash-outline',
    titulo : 'Crear Recursos'
  }
];

private rutasUsuario = [
  {
    routerlink : '/inscribirse',
    icon : 'home-outline',
    titulo : 'inscribirse'
  },
  {
    routerlink : '/alumno',
    icon : 'people-outline',
    titulo : 'Rutinas'
  },
  {
    routerlink : '/complete-datos',
    icon : 'person-outline',
    titulo : 'Perfil'
  },
  {
    routerlink : '/lista-mensajes',
    icon : 'chatbubbles-outline',
    titulo : 'Chat'
  }
];
  constructor(private Auth: AuthService,
              private router: Router,
              private menu: MenuController) { }

  ngOnInit() {
    this.cargarUser();
  }

  esAdmin(){
    if(this.Auth.userinfo.email== 'chino@gmail.com'){
      this.verContenido = true ;  
      this.rutas = this.rutasAdmin;
    }else{
      this.verContenido = true ;  
      this.rutas = this.rutasUsuario;
    }
  }
  salir() {
    this.menu.close();
    this.Auth.logout();
  }
  irRecursos(){
    this.router.navigate(['/recursos']);
  }

  irEvento() {
    this.router.navigate(['/evento']);
  }
  cargarUser() {
    this.Auth.userData.subscribe((userData) => {
      this.id = userData.uid;
      this.obteneruser();
    });
  }
  async obteneruser() {
    this.Auth.obtenerUsuario(this.id).subscribe(usuario => {
      this.usuario = usuario;
      this.email = this.usuario.email;
      console.log (this.email);
      this.esAdmin();
    });
  }
}
