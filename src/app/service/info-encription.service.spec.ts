import { TestBed } from '@angular/core/testing';

import { InfoEncriptionService } from './info-encription.service';

describe('InfoEncriptionService', () => {
  let service: InfoEncriptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InfoEncriptionService);
  });

  it('should be created a service InfoEncriptionService', () => {
    expect(service).toBeTruthy();
  });
});
