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
tipo;
private rutasAdmin = [
  {
    routerlink : '/inscribirse', // ambos pero separar admin 
    icon : 'home-outline',
    titulo : 'Inicio'
  },
  {
    routerlink : '/crudevento', // arreglar y agregar lista de eventos 
    icon : 'barbell-outline',
    titulo : 'Crear eventos'
  },
  {
    routerlink : '/perfiles',
    icon : 'person-outline',
    titulo : 'Mis Datos'
  },
  {
    routerlink : '/misEventos',//crear componente completo
    icon : 'person-outline',
    titulo : 'Mis Eventos'
  },
];

private rutasUsuario = [
  {
    routerlink : '/inscribirse', // ambos 
    icon : 'home-outline',
    titulo : 'Inicio'
  },
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
    this.cargarUser();
  }

  esAdmin(){
    if(this.tipo== 'Organizador'){
      this.rutas = this.rutasAdmin;
      this.verContenido = true ;  
    }else{
      this.rutas = this.rutasUsuario;
      this.verContenido = true ;
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
      console.log (userData);
      this.obteneruser();
    });
  }
  async obteneruser() {
    this.Auth.obtenerUsuario(this.id).subscribe(usuario => {
      this.usuario = usuario;
      console.log (usuario);
      this.tipo = this.usuario.Tipo;
      this.esAdmin();
    });
  }
}
