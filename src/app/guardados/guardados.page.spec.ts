import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GuardadosPage } from './guardados.page';

describe('GuardadosPage', () => {
  let component: GuardadosPage;
  let fixture: ComponentFixture<GuardadosPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardadosPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GuardadosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
