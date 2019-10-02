import { TestBed } from '@angular/core/testing';

import { SseClientService } from './sse-client.service';

describe('SseClientService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SseClientService = TestBed.get(SseClientService);
    expect(service).toBeTruthy();
  });
});
