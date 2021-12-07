import { TestBed } from '@angular/core/testing';

import { VeterinariaService } from './veterinaria.service';

describe('VeterinariaService', () => {
  let service: VeterinariaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VeterinariaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
