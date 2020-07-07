import { TestBed } from '@angular/core/testing';

import { SweetSService } from './sweet-s.service';

describe('SweetSService', () => {
  let service: SweetSService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SweetSService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
