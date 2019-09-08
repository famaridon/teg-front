import { TestBed } from '@angular/core/testing';

import { WsTegService } from './ws-teg.service';

describe('WsTegService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WsTegService = TestBed.get(WsTegService);
    expect(service).toBeTruthy();
  });
});
