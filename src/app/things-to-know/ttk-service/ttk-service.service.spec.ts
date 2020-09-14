import { TestBed } from '@angular/core/testing';

import { TtkServiceService } from './ttk-service.service';

describe('HostDataService', () => {
  let service: TtkServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TtkServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
