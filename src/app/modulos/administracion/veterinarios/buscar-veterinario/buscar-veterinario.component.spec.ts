import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarVeterinarioComponent } from './buscar-veterinario.component';

describe('BuscarVeterinarioComponent', () => {
  let component: BuscarVeterinarioComponent;
  let fixture: ComponentFixture<BuscarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
