import { TestBed } from '@angular/core/testing';

import {IndividualServiceService} from '@angular/forms'

describe('IndividualServiceService', () => {
  let service: IndividualServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndividualServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

