import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarMascotaComponent } from './buscar-mascota.component';

describe('BuscarMascotaComponent', () => {
  let component: BuscarMascotaComponent;
  let fixture: ComponentFixture<BuscarMascotaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscarMascotaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarMascotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
