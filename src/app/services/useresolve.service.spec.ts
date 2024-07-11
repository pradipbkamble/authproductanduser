import { TestBed } from '@angular/core/testing';

import { UseresolveService } from './useresolve.service';

describe('UseresolveService', () => {
  let service: UseresolveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseresolveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
