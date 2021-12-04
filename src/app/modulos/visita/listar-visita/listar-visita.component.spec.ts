import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarVisitaComponent } from './listar-visita.component';

describe('ListarVisitaComponent', () => {
  let component: ListarVisitaComponent;
  let fixture: ComponentFixture<ListarVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
