import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrudrecursoPage } from './crudrecurso.page';

describe('CrudrecursoPage', () => {
  let component: CrudrecursoPage;
  let fixture: ComponentFixture<CrudrecursoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudrecursoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrudrecursoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
