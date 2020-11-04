import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfiles',
  templateUrl: './perfiles.page.html',
  styleUrls: ['./perfiles.page.scss'],
})
export class PerfilesPage implements OnInit {
  usuario ;
  nombre;
  apellido;
  id ;
  verContenido= false;
  
  constructor(private auth: AuthService,private router: Router) { }

  ngOnInit() {
    this.cargarUser();
  }
  cargarUser() {
    this.auth.userData.subscribe((userData) => {
      this.id = userData.uid;
      this.obteneruser();
    });
  }
  async obteneruser() {
    this.auth.obtenerUsuario(this.id).subscribe(usuario => {
      this.usuario = usuario;
      this.rellenar();
      console.log (this.usuario);
    });
  }

  rellenar(){
    this.nombre = this.usuario.Nombre;
    this.apellido = this.usuario.Apellido;
    this.verContenido =true ;
  }
actualizarPerfil(){
  this.auth.actualizarPerfil(this.id, this.nombre, this.apellido);
}
volver() {
  this.router.navigateByUrl(`/principaluser`);
}
}
