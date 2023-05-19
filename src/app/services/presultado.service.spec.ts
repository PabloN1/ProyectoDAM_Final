import { TestBed } from '@angular/core/testing';

import { PresultadoService } from './presultado.service';

describe('PresultadoService', () => {
  let service: PresultadoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresultadoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
