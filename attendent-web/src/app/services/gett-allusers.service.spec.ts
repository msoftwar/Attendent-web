import { TestBed } from '@angular/core/testing';

import { GettAllusersService } from './gett-allusers.service';

describe('GettAllusersService', () => {
  let service: GettAllusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GettAllusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
