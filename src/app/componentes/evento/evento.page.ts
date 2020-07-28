import { Component, OnInit } from '@angular/core';
import { evento } from "src/app/Model/evento.interface";
import { AuthService } from "src/app/servicios/auth.service";

@Component({
  selector: 'app-evento',
  templateUrl: './evento.page.html',
  styleUrls: ['./evento.page.scss'],
})
export class EventoPage implements OnInit {
  titulo= "eventos";
  eventos :evento[];

  constructor(private authService:AuthService) { }

  ngOnInit() {
    this.authService.getEventos().subscribe(res=>this.eventos=res);
  }

}
