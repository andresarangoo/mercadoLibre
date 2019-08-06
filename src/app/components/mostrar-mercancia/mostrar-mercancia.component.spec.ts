import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarMercanciaComponent } from './mostrar-mercancia.component';

describe('MostrarMercanciaComponent', () => {
  let component: MostrarMercanciaComponent;
  let fixture: ComponentFixture<MostrarMercanciaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarMercanciaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarMercanciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
