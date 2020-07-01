import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AngularFirestore,AngularFirestoreCollection } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { auth } from 'firebase';
import { map } from "rxjs/operators";
import { Observable } from "rxjs";
import { evento } from "src/app/Model/evento.interface";
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private eventosCollection:AngularFirestoreCollection<evento>;
  private eventos:Observable<evento[]>

  constructor(private AFauth : AngularFireAuth,private router:Router, private db: AngularFirestore,public platform: Platform ,private db1:AngularFirestore) { 
    this.eventosCollection=db1.collection<evento>('eventos');
    this.eventos = this.eventosCollection.snapshotChanges().pipe(map(
      actions =>{
        return actions.map(a=>{
          const data =a.payload.doc.data();
          const id= a.payload.doc.id;
          return {id, ...data};
        });
      }
    ));
  }
  
  getEventos(){
    return this.eventos;
  }
  getEvento(id:string){
    return this.eventosCollection.doc<evento>(id).valueChanges();
  }

  updateEvento(evento:evento, id:string){
    return this.eventosCollection.doc(id).update(evento)
  }
  addEvento(evento:evento){
    return this.eventosCollection.add(evento);
  }
  deleteEvento(id:string){
    return this.eventosCollection.doc(id).delete();
  }

  login(email:string, password:string){
   if( this.platform.is('cordova')){
    return new Promise((resolve,rejected) =>{
      this.AFauth.signInWithEmailAndPassword(email,password).then(user =>{
        resolve(user)
      }).catch(err => rejected(err));
    });
   }else{
     return this.AFauth.signInWithEmailAndPassword(email,password)
   }
    
  }
  register(email:string ,password:string,Nombre:string,Apellido:string){
    return new Promise((resolve,reject) =>{
      this.AFauth.createUserWithEmailAndPassword(email,password).then(res =>{
        //console.log(res.user.uid)
        const uid=res.user.uid
        const email=res.user.email
        this.db.collection('usuario').doc(res.user.uid).set({
          Nombre:Nombre,
          Apellido:Apellido,
          uid:uid,
          email:email
        })
        resolve(res)
      }).catch(err=>reject(err)) 
    })
  }
  logout(){
    this.AFauth.signOut().then(()=>{
      this.router.navigate(['/login']);
    })
  }
  Mostrar(){
    return this.AFauth.authState
  }
}
