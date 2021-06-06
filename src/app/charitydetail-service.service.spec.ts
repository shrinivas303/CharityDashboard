import { TestBed } from '@angular/core/testing';

import { CharitydetailServiceService } from './charitydetail-service.service';

describe('CharitydetailServiceService', () => {
  let service: CharitydetailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CharitydetailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
