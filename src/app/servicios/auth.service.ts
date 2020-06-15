import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { promise } from 'protractor';
import { resolve } from 'dns';
import { rejects } from 'assert';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Platform } from '@ionic/angular';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private AFauth : AngularFireAuth,private router:Router, private db: AngularFirestore,public platform: Platform) { }
  
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
