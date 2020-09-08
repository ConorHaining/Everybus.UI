import { TestBed } from '@angular/core/testing';

import { StopResolver } from './stop-resolver.service';

describe('StopResolverService', () => {
  let service: StopResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StopResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
