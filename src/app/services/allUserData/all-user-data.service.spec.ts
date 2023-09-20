import { TestBed } from '@angular/core/testing';

import { AllUserDataService } from './all-user-data.service';

describe('AllUserDataService', () => {
  let service: AllUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AllUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
