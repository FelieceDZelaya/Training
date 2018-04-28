import { TestBed, inject } from '@angular/core/testing';

import { AtmServiceService } from './atm.service.service';

describe('Atm.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AtmServiceService]
    });
  });

  it('should be created', inject([AtmServiceService], (service: AtmServiceService) => {
    expect(service).toBeTruthy();
  }));
});
