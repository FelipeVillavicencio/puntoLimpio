import { Component, OnInit } from '@angular/core';
import { RecursosService } from '../../servicios/recursos.service';

@Component({
  selector: 'app-recursos',
  templateUrl: './recursos.page.html',
  styleUrls: ['./recursos.page.scss'],
})
export class RecursosPage implements OnInit {
recursos = [];
  constructor(private recursoS: RecursosService) { }

  ngOnInit() {
    this.cargarRecursos();
  }
cargarRecursos(){
  this.recursoS.obtenerRecursos().subscribe(recursoSnap =>{
    this.recursos = [];
    recursoSnap.forEach(recursoData =>{
      const id = recursoData.payload.doc.id;
      const data = recursoData.payload.doc.data() as any;
      this.recursos.push({id, ...data});
    });
  });
}
}
