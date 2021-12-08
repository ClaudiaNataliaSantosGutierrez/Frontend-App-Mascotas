import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVisitaComponent } from './eliminar-visita.component';

describe('EliminarVisitaComponent', () => {
  let component: EliminarVisitaComponent;
  let fixture: ComponentFixture<EliminarVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EliminarVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EliminarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
