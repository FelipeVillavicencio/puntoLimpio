import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class RecursosService {

  constructor(private aFire: AngularFirestore) { }

cargarRecurso(recurso){
  const recursoPost = {
    nombre : recurso.nombre,
    tipo : recurso.tipo,
    uso : recurso.uso
   };
  if (recurso.id) {
return this.aFire.collection('recursos').doc(recurso.id).set(recursoPost,{merge : true});
   }
  return this.aFire.collection('recursos').add(recursoPost);
}

obtenerRecursos(){
  return this.aFire.collection('recursos').snapshotChanges();
}

eliminarRecursos(id){
  Swal.fire({
    title: '¿Estas seguro que deseas eliminar?',
    text: `esta accion no se podra revertir!`,
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Si, Deseo eliminarlo!'
  }).then(result => {
    if (result.value) {
      this.aFire.collection('recursos').doc(id).delete();
      Swal.fire('Eliminado!', 'el recurso ha sido eliminado.', 'success');
    }else{
      Swal.fire('Cancelado', 'No se ha eliminado', 'error');
    }
  });
}


}


