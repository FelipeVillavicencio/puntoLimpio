import { Component, OnInit } from '@angular/core';
import { evento } from "src/app/Model/evento.interface";
import { AuthService } from "src/app/servicios/auth.service";
import {ActivatedRoute} from "@angular/router";
import { NavController,LoadingController } from "@ionic/angular";

@Component({
  selector: 'app-crudevento',
  templateUrl: './crudevento.page.html',
  styleUrls: ['./crudevento.page.scss'],
})
export class CRUDeventoPage implements OnInit {
  evento:evento={
    Nombre:'',
    Lugar:'',
    fecha:'',
    desc:'',
    hora:''
  };
  eventoId=null;
  constructor(private route:ActivatedRoute,private nav:NavController, private authService:AuthService, private loadingController:LoadingController) { }

  ngOnInit() {
    this.eventoId=this.route.snapshot.params['id'];
    if(this.eventoId){
      this.loadEvento();
    }
  }
  async loadEvento(){
    const loading =await this.loadingController.create({
      message:'Loading.....'
    });
    await loading.present();
    this.authService.getEvento(this.eventoId).subscribe(res=>{
      loading.dismiss();
      this.evento=res;
    });
  }
  async saveEvento(){
    const loading =await this.loadingController.create({
      message:'Saving.....'
    });
    await loading.present();

    if(this.eventoId){
      //update
      this.authService.updateEvento(this.evento,this.eventoId).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('evento')
      })
    }else{
      //crear
      this.authService.addEvento(this.evento).then(()=>{
        loading.dismiss();
        this.nav.navigateForward('evento')
      })
    }
  }
  onRemove(idEvento:string){
    this.authService.deleteEvento(idEvento);
  }

}
