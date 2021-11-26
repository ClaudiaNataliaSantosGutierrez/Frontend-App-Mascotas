import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarMascotaComponent } from './eliminar-mascota.component';

describe('EliminarMascotaComponent', () => {
  let component: EliminarMascotaComponent;
  let fixture: ComponentFixture<EliminarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
