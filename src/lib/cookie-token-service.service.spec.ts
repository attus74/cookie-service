import { TestBed } from '@angular/core/testing';

import { CookieTokenServiceService } from './cookie-token-service.service';

describe('CookieTokenServiceService', () => {
  let service: CookieTokenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CookieTokenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
