import { TestBed, inject } from '@angular/core/testing';

import { OdooService } from './odoo.service';

describe('OdooService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OdooService]
    });
  });

  it('should be created', inject([OdooService], (service: OdooService) => {
    expect(service).toBeTruthy();
  }));
});
