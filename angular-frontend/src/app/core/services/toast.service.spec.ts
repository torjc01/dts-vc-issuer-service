import { TestBed } from '@angular/core/testing';

import { ToastService } from './toast.service';

describe('ToastService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: []
  }));

  it('should create', () => {
    const service: ToastService = TestBed.inject(ToastService);
    expect(service).toBeTruthy();
  });
});
