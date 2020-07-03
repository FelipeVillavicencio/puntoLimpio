import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private aFire: AngularFirestore) { }

cargarRecurso(recurso){
  const recursoPost = {
    nombre : recurso.nombre,
    tipo : recurso.tipo,
    uso : false
   };
  return this.aFire.collection('recursos').add(recursoPost);
}

obtenerRecursos(){
  return this.aFire.collection('recursos').snapshotChanges();
}

}


