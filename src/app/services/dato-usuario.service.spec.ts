import { TestBed } from '@angular/core/testing';

import { DatoUsuarioService } from './dato-usuario.service';

describe('DatoUsuarioService', () => {
  let service: DatoUsuarioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatoUsuarioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
