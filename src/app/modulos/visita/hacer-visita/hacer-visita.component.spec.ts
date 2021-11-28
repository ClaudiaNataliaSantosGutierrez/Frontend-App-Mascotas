import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HacerVisitaComponent } from './hacer-visita.component';

describe('HacerVisitaComponent', () => {
  let component: HacerVisitaComponent;
  let fixture: ComponentFixture<HacerVisitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HacerVisitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HacerVisitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
