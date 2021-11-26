import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVeterinariaComponent } from './buscar-veterinaria.component';

describe('BuscarVeterinariaComponent', () => {
  let component: BuscarVeterinariaComponent;
  let fixture: ComponentFixture<BuscarVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
