import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVeterinariaComponent } from './eliminar-veterinaria.component';

describe('EliminarVeterinariaComponent', () => {
  let component: EliminarVeterinariaComponent;
  let fixture: ComponentFixture<EliminarVeterinariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVeterinariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarVeterinariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
