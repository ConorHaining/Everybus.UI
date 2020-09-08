import { TestBed } from '@angular/core/testing';

import { DeparturesResolver } from './departures-resolver.service';

describe('DeparturesResolverService', () => {
  let service: DeparturesResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeparturesResolver);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
