import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header-volver',
  templateUrl: './header-volver.component.html',
  styleUrls: ['./header-volver.component.scss'],
})
export class HeaderVolverComponent implements OnInit {
  @Input() titulo: any ;
  constructor(private router: Router) { }

  ngOnInit() {}

 volver() {
    this.router.navigateByUrl(`/principal`);
  }
}
