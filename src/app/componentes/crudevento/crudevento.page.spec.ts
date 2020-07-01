import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CRUDeventoPage } from './crudevento.page';

describe('CRUDeventoPage', () => {
  let component: CRUDeventoPage;
  let fixture: ComponentFixture<CRUDeventoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CRUDeventoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CRUDeventoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
