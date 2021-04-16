import { TestBed } from '@angular/core/testing';

import { TranslocoResource } from './transloco-resource.service';

describe('TranslocoResource', () => {
  let service: TranslocoResource;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslocoResource);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
