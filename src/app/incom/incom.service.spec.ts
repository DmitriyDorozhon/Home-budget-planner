import { TestBed } from '@angular/core/testing';

import { IncomService } from './incom.service';

describe('IncomService', () => {
  let service: IncomService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
