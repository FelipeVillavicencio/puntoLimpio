import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  titulo= "Administrador";
  email:string;

  constructor(private authservice:AuthService) { }


  ngOnInit() {
    this.authservice.Mostrar().subscribe(user => {
      this.email=user.email
    })
    
  }
  logout(){
    this.authservice.logout();
  }

}
