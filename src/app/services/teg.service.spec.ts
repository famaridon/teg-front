import { TestBed } from '@angular/core/testing';

import { TegService } from './teg.service';

describe('TegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TegService = TestBed.get(TegService);
    expect(service).toBeTruthy();
  });
});
