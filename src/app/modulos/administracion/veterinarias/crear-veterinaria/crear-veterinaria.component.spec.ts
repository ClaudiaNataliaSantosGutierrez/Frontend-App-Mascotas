import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearVeterinariaComponent } from './crear-veterinaria.component';

describe('CrearVeterinariaComponent', () => {
  let component: CrearVeterinariaComponent;
  let fixture: ComponentFixture<CrearVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
