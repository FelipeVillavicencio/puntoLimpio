import { Component, OnInit } from '@angular/core';
import { evento } from "src/app/Model/evento.interface";
import { AuthService } from "src/app/servicios/auth.service";
@Component({
  selector: 'app-inscribirse',
  templateUrl: './inscribirse.page.html',
  styleUrls: ['./inscribirse.page.scss'],
})
export class InscribirsePage implements OnInit {
  titulo= "Inscribirse";
  eventos = [];
  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.cargarEvento();
  }
  cargarEvento(){
    this.auth.obtenerevento().subscribe(recursoSnap =>{
      this.eventos = [];
      recursoSnap.forEach(eventoData =>{
        const id = eventoData.payload.doc.id;
        const data = eventoData.payload.doc.data() as any;
        this.eventos.push({id, ...data});
        console.log(this.eventos);
        
      });
    });
  }

}
