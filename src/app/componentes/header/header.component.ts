import { Component, OnInit, Input } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../../servicios/auth.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
@Input() titulo: any ;
  constructor(public navCtrl: NavController, private conex: AuthService) { }

//vistaAdmin(){
  //if(this.conex.login()){
  //}
//}
  ngOnInit() {}

}
