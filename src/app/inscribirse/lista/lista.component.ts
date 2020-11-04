import { Component, OnInit, Input } from '@angular/core';
import { evento } from '../../Model/evento.interface';
import { AuthService } from '../../servicios/auth.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss'],
})
export class ListaComponent implements OnInit {
  @Input() evento: any = {};
           nombre= "" ;
           inscripciones = {};
           id ;
           usuario ;
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.cargarUser();
    console.log(this.evento);
  }
inscribirse(){
this.auth.inscribirse(this.evento.id,this.nombre);

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
    this.nombre = this.usuario.Nombre;
    console.log (this.nombre);
  });
}
}
