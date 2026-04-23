import { TestBed } from '@angular/core/testing';

import { TestData } from './test-data';

describe('TestData', () => {
  let service: TestData;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestData);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
