import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVisitaComponent } from './buscar-visita.component';

describe('BuscarVisitaComponent', () => {
  let component: BuscarVisitaComponent;
  let fixture: ComponentFixture<BuscarVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
