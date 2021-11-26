import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVeterinarioComponent } from './eliminar-veterinario.component';

describe('EliminarVeterinarioComponent', () => {
  let component: EliminarVeterinarioComponent;
  let fixture: ComponentFixture<EliminarVeterinarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVeterinarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
