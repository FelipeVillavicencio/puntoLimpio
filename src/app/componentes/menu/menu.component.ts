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
usuario = false;
verContenido= true;
rutas = [];

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
    routerlink : '/perfiles',
    icon : 'person-outline',
    titulo : 'Mis Datos'
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
    this.esAdmin();
  }

  esAdmin(){
    if(this.Auth.userinfo.email== 'admin@admin.com'){
      this.admin= true;
      this.rutas = this.rutasAdmin;
    }else{
      this.usuario= true;
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
}
