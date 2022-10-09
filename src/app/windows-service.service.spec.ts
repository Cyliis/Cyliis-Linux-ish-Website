import { TestBed } from '@angular/core/testing';

import { WindowsServiceService } from './windows.service';

describe('WindowsServiceService', () => {
  let service: WindowsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
