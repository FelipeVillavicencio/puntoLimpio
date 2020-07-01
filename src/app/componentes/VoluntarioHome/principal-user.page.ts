import { Component, OnInit } from '@angular/core';
import { AuthService } from "src/app/servicios/auth.service";

@Component({
  selector: 'app-principal-user',
  templateUrl: './principal-user.page.html',
  styleUrls: ['./principal-user.page.scss'],
})
export class PrincipalUserPage implements OnInit {
  email:string;

  constructor(private authservice:AuthService) { }

  ngOnInit() {
    this.authservice.Mostrar().subscribe(user => {
      this.email=user.email})
  }

}
